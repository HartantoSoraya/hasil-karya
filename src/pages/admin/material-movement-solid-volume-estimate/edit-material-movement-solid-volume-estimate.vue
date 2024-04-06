<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Ubah Estimasi Volume Padat
      </h2>

      <VBtn
        :to="{ name: 'admin-material-movement-solid-volume-estimates' }"
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
              md="12"
            >
              <VTextField
                v-model="remarks"
                label="Keterangan"
                placeholder="Masukan Keterangan"
                :error-messages="error && error.remarks ? [error.remarks] : []"
                type="text"
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

<script setup>
import { useMaterialMovementSolidVolumeEstimateStore } from '@/stores/materialMovementSolidVolumeEstimate'
import { useStationStore } from '@/stores/station'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDate } from 'vuetify'
import { toNumeral } from '@/@core/utils/formatters'

const route = useRoute()
const adapter = useDate()

const { stations } = storeToRefs(useStationStore())

const { fetchStations } = useStationStore()

fetchStations({ type: 'station' })

const { loading, error } = storeToRefs(useMaterialMovementSolidVolumeEstimateStore())
const { fetchMaterialMovementSolidVolumeEstimate, updateMaterialMovementSolidVolumeEstimate } = useMaterialMovementSolidVolumeEstimateStore()

const materialMovementSolidVolumeEstimateId = route.params.id

const code = ref('')
const date = ref('')
const station_id = ref('')
const solid_volume_estimate = ref('')
const remarks = ref('')

const fetchMaterialMovementSolidVolumeEstimateData = async () => {
  try {
    const materialMovementSolidVolumeEstimateData = await fetchMaterialMovementSolidVolumeEstimate(materialMovementSolidVolumeEstimateId)

    code.value = materialMovementSolidVolumeEstimateData.code
    date.value = materialMovementSolidVolumeEstimateData.date
    station_id.value = materialMovementSolidVolumeEstimateData.station.id
    solid_volume_estimate.value = toNumeral(materialMovementSolidVolumeEstimateData.solid_volume_estimate)
    remarks.value = materialMovementSolidVolumeEstimateData.remarks
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  document.title = 'Ubah Estimasi Volume Padat'
  fetchMaterialMovementSolidVolumeEstimateData()
})

const handleSubmit = () => {
  updateMaterialMovementSolidVolumeEstimate({
    id: materialMovementSolidVolumeEstimateId,
    code: code.value,
    station_id: station_id.value,
    date: date.value,
    solid_volume_estimate: solid_volume_estimate.value,
    remarks: remarks.value,
  })
}

onUnmounted(() => {
  error.value = null
})

const handleReset = () => {
  fetchMaterialMovementSolidVolumeEstimateData()
}
</script>

<style lang="scss">
.v-row {
    margin: 0px !important;
}
</style>