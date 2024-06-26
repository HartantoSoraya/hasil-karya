<script setup>
import { useTruckStore } from '@/stores/truck'
import { toNumeral } from '@/@core/utils/formatters'
import { downloadQRCode } from '@/helpers/qrHelper'

const headers = [
  {
    text: 'Kode',
    value: 'code',
    sortable: true,
  },
  {
    text: 'Merek',
    value: 'brand',
  },
  {
    text: 'Model',
    value: 'model',
  },
  {
    text: 'Tahun Produksi',
    value: 'production_year',
    sortable: true,
  },
  {
    text: 'Vendor',
    value: 'vendor.name',
  },
  {
    text: 'Kapasitas',
    value: 'capacity',
  },
  {
    text: 'Aktif',
    value: 'is_active',
    sortable: true,
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 400,
  },
]

const { trucks, loading, error, success } = storeToRefs(useTruckStore())
const { fetchTrucks, deleteTruck, activateTruck } = useTruckStore()

fetchTrucks()

async function handleDeleteTruck(truck) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus truk ini?')
  if (confirmed) {
    await deleteTruck(truck.id)
    fetchTrucks()
  }
}

async function handleActivateTruck(truck) {
  const formData = new FormData()

  formData.append('is_active', truck.is_active ? 1 : 0)
  await activateTruck(truck.id, formData)
  fetchTrucks()
}

const search = ref('')

function printQRCode(id, name) {
  downloadQRCode(id, 'Truck ' + name)
}


onMounted(() => {
  document.title = 'Truck'
})

onUnmounted(() => {
  error.value = null
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
        Truck
      </h2>

      <VBtn
        :to="{ name: 'admin-truck-create' }"
        color="primary"
      >
        Tambah Truck
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Truck"
        placeholder="Cari Truck"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="trucks"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-capacity="item">
            {{ toNumeral(item.capacity) }} m³
          </template>
          <template #item-is_active="item">
            <VSwitch
              v-model="item.is_active"
              color="primary"
              @change="() => handleActivateTruck(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              color="info"
              size="small"
              class="m-5"
              @click="printQRCode(item.id, item.brand + ' ' + item.model)"
            >
              Print QR Code
            </VBtn>
            <VBtn
              :to="{ name: 'admin-truck-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-truck-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteTruck(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
