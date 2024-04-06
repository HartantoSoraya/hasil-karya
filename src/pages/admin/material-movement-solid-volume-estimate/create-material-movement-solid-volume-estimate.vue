<script setup>
import { useMaterialMovementSolidVolumeEstimateStore } from '@/stores/materialMovementSolidVolumeEstimate'
import { useStationStore } from '@/stores/station'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

const { stations } = storeToRefs(useStationStore())

const { fetchStations } = useStationStore()

fetchStations({ type: 'station' })

const { loading, error } = storeToRefs(useMaterialMovementSolidVolumeEstimateStore())
const { createMaterialMovementSolidVolumeEstimate } = useMaterialMovementSolidVolumeEstimateStore()

const code = ref('AUTO')
const date = ref(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 16))
const station_id = ref('')
const solid_volume_estimate = ref('0')
const remarks = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  date.value = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 16)
  station_id.value = ''
  solid_volume_estimate.value = 0
  remarks.value = ''
}

const handleSubmit = () => {
  createMaterialMovementSolidVolumeEstimate({
    code: code.value,
    station_id: station_id.value,
    date: date.value.split('T').join(' ') + ':00',
    solid_volume_estimate: solid_volume_estimate.value,
    remarks: remarks.value,
  })
}

onMounted(() => {
  document.title = 'Estimasi Volume Padat'
})

onUnmounted(() => {
  handleReset()
  error.value = null
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Estimasi Volume Padat
      </h2>

      <VBtn
        to="/admin/material-movement-solid-volume-estimates"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>
    
    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="code"
                label="Kode"
                placeholder="Kode Estimasi Volume Padat"
                :error-messages="error && error.code ? [error.code] : []"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="date"
                label="Tanggal"
                placeholder="Masukan Tanggal"
                :error-messages="error && error.date ? [error.date] : []"
                type="datetime-local"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="station_id"
                :items="stations"
                label="Stasiun"
                placeholder="Pilih Stasiun"
                :error-messages="error && error.station_id ? [error.station_id] : []"
                :item-title="station => station.name"
                :item-value="station => station.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="solid_volume_estimate"
                label="Estimasi Volume Padat"
                placeholder="Masukan Estimasi Volume Padat"
                :error-messages="error && error.solid_volume_estimate ? [error.solid_volume_estimate] : []"
                type="number"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="remarks"
                label="Keterangan"
                placeholder="Masukan Keterangan"
                :error-messages="error && error.remarks ? [error.remarks] : []"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Simpan
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row {
  margin: 0px !important
}
</style>
