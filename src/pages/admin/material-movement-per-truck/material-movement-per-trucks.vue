<script setup>
import { useMaterialMovementStore } from '@/stores/materialMovement'
import { useTruckStore } from '@/stores/truck'
import { toNumeral, toPercentage, formatDateTime } from '@/@core/utils/formatters'
import { watch } from 'vue'

const headers = [
  {
    text: 'Tanggal',
    value: 'date',
    width: 200,
  },
  {
    text: 'Driver',
    value: 'driver.name',
    width: 200,
  },
  {
    text: 'POS',
    value: 'station.name',
    width: 200,
  },
  {
    text: 'Selisih Waktu',
    value: 'date_difference',
    width: 200,
  },
  {
    text: 'Pemeriksa',
    value: 'checker.name',
    width: 200,
  },
  {
    text: 'Kapasitas Truk',
    value: 'truck_capacity',
    width: 90,
  },
  {
    text: 'Rasio Index',
    value: 'observation_ratio',
    width: 100,
  },
  {
    text: 'Rasio Padat',
    value: 'solid_ratio',
    width: 100,
  },
  {
    text: 'Estimasi Volume',
    value: 'solid_volume_estimate',
    width: 100,
  },
  {
    text: 'Keterangan',
    value: 'remarks',
    width: 200,
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 150,
  },
]

const { movements, loading, error, success } = storeToRefs(useMaterialMovementStore())
const { fetchMaterialMovementByTruck } = useMaterialMovementStore()

const { trucks } = storeToRefs(useTruckStore())
const { fetchTrucks } = useTruckStore()

const selectedTruck = ref(null)

fetchTrucks()

const search = ref('')

onMounted(() => {
  document.title = 'Perpindahan Material Per Truk'
})

onMounted(() => {
  error.value = null
})

watch(selectedTruck, async truck => {
  if (truck) {
    await fetchMaterialMovementByTruck(truck)
  }
})
</script>

<template>
  <VDialog
    v-if="success"
    v-model="success"
    max-width="400"
  >
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (success = null)"
        >
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Perpindahan Material Per Truck
      </h2>
    </VCol>

    <VCol
      cols="12"
      md="5"
    >
      <VSelect
        v-model="selectedTruck"
        :items="trucks"
        :item-title="item => item.name"
        :item-value="item => item.id"
        label="Pilih Truck"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Perpindahan Material"
        placeholder="Cari Perpindahan Material"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="movements"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-date="item">
            {{ formatDateTime(item.date) }}
          </template>

          <template #item-truck_capacity="item">
            {{ toNumeral(item.truck_capacity) }} m³
          </template>

          <template #item-observation_ratio="item">
            <span :style="item.truck_capacity < item.observation_ratio ? { color: 'red', fontWeight: 'bold' } : {}">
              {{ toNumeral(item.observation_ratio) }} m³ ({{ toPercentage(item.observation_ratio / item.truck_capacity)
              }})
            </span>
          </template>

          <template #item-solid_ratio="item">
            {{ toNumeral(item.solid_ratio) }}
          </template>

          <template #item-solid_volume_estimate="item">
            {{ toNumeral(item.solid_volume_estimate) }} m³
          </template>

          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-material-movement-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>