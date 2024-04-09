
<script setup>
import { useMaterialMovementSolidVolumeEstimateStore } from '@/stores/materialMovementSolidVolumeEstimate'
import { toNumeral, formatDate } from '@/@core/utils/formatters'
import { storeToRefs } from 'pinia'

const headers = [
  {
    text: 'Tanggal',
    value: 'date',
  },
  {
    text: 'POS',
    value: 'station.name',
    width: 200,
  },
  {
    text: 'Estimasi Volume',
    value: 'solid_volume_estimate',
    width: 200,
  },
  {
    text: 'Keterangan',
    value: 'remarks',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { solidVolumeEstimates, loading, error, success } = storeToRefs(useMaterialMovementSolidVolumeEstimateStore())
const { fetchMaterialMovementSolidVolumeEstimates, deleteMaterialMovementSolidVolumeEstimate } = useMaterialMovementSolidVolumeEstimateStore()

fetchMaterialMovementSolidVolumeEstimates()

async function handleDeleteMaterialMovementSolidVolumeEstimate(materialMovementSolidVolumeEstimate) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus data ini?')
  if (confirmed) {
    await deleteMaterialMovementSolidVolumeEstimate(materialMovementSolidVolumeEstimate.id)
    fetchMaterialMovementSolidVolumeEstimates()
  }
}

onMounted(() => {
  document.title = 'Estimasi Volume Padat'
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

  <Row>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"  
    >
      <h2 class="mb-0">
        Estimasi Volume Padat  
      </h2>

      <VBtn
        :to="{ name: 'admin-material-movement-solid-volume-estimate-create' }"
        color="primary"
      >
        Tambah Estimasi Volume Padat
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari"
        placeholder="Cari"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="solidVolumeEstimates"
          :loading="loading"
          :search-value="search"
          button-pagination
          show-index
          class="data-table"
        >
          <template #item-date="item">
            {{ formatDate(item.date) }}
          </template>

          <template #item-solid_volume_estimate="item">            
            {{ toNumeral(item.solid_volume_estimate) }}
          </template>

          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-material-movement-solid-volume-estimate-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-material-movement-solid-volume-estimate-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteMaterialMovementSolidVolumeEstimate(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </vcard>
    </vcol>
  </Row>
</template>