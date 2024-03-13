<script setup>
import { useVehicleRentalRecordStore } from '@/stores/vehicleRentalRecord'
import { useTruckStore } from '@/stores/truck'
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useVehicleRentalRecordStore())
const { createVehicleRentalRecord } = useVehicleRentalRecordStore()

const { trucks } = storeToRefs(useTruckStore())
const { fetchTrucks } = useTruckStore()

const { heavyVehicles } = storeToRefs(useHeavyVehicleStore())
const { fetchHeavyVehicles } = useHeavyVehicleStore()

fetchTrucks()
fetchHeavyVehicles()

const code = ref('AUTO')
const truck_id = ref()
const heavy_vehicle_id = ref()
const start_date = ref(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 16))
const rental_duration = ref()
const rental_cost = ref()
const is_paid = ref(0)
const remarks = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  truck_id.value = null
  heavy_vehicle_id.value = null
  start_date.value = null
  rental_duration.value = null
  rental_cost.value = null
  is_paid.value = 0
  remarks.value = ''
}

const handleSubmit = () => {
  createVehicleRentalRecord({
    code: code.value,
    truck_id: truck_id.value,
    heavy_vehicle_id: heavy_vehicle_id.value,
    start_date: start_date.value.split('T').join(' ') + ':00',
    rental_duration: rental_duration.value,
    rental_cost: rental_cost.value,
    is_paid: is_paid.value,
    remarks: remarks.value,
  })
}

onMounted(() => {
  document.title = 'Tambah Penyewaan Kendaraan'
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
        Tambah Penyewaan Kendaraan
      </h2>

      <VBtn
        to="/admin/vehicle-rental-record"
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
                placeholder="Kode Penyewaan Kendaraan"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="truck_id"
                :items="trucks"
                :item-title="item => item.brand + ' ' + item.model"
                :item-value="item => item.id"
                label="Truk"
                placeholder="Pilih Truk"
                :error-messages="error && error.truck_id ? [error.truck_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="heavy_vehicle_id"
                :items="heavyVehicles"
                :item-title="item => item.brand + ' ' + item.model"
                :item-value="item => item.id"
                label="Alat Berat"
                placeholder="Pilih Alat Berat"
                :error-messages="error && error.heavy_vehicle_id ? [error.heavy_vehicle_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="start_date"
                label="Tanggal Mulai"
                placeholder="Tanggal Mulai"
                type="datetime-local"
                :error-messages="error && error.start_date ? [error.start_date] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="rental_duration"
                label="Durasi Penyewaan"
                placeholder="Durasi Penyewaan"
                :error-messages="error && error.rental_duration ? [error.rental_duration] : []"
                type="number"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="rental_cost"
                label="Biaya Penyewaan"
                placeholder="Biaya Penyewaan"
                :error-messages="error && error.rental_cost ? [error.rental_cost] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="is_paid"
                label="Status Pembayaran"
                :items="[
                  { text: 'Belum Dibayar', value: 0 },
                  { text: 'Sudah Dibayar', value: 1 }
                ]"
                :item-title="item => item.text"
                :item-value="item => item.value"
                :error-messages="error && error.is_paid ? [error.is_paid] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="remarks"
                label="Catatan"
                placeholder="Catatan"
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
  margin: 0px !important;
}
</style>