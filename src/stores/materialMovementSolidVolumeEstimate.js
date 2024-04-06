import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { handleError } from "@/helpers/errorHelper"

import { defineStore } from "pinia"

export const useMaterialMovementSolidVolumeEstimateStore = defineStore({
  id: "materialMovementSolidVolumeEstimate",
  state: () => ({
    solidVolumeEstimates: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMaterialMovementSolidVolumeEstimates() {
      try {
        this.loading = true

        const response = await axiosInstance.get("/material-movement-solid-volume-estimates")

        this.solidVolumeEstimates = response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchMaterialMovementSolidVolumeEstimate(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/material-movement-solid-volume-estimate/${id}`)

        return response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createMaterialMovementSolidVolumeEstimate(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post("/material-movement-solid-volume-estimate", payload)

        this.success = response.data.message

        router.push({ name: "admin-material-movement-solid-volume-estimates" })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateMaterialMovementSolidVolumeEstimate(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.put(`/material-movement-solid-volume-estimate/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: "admin-material-movement-solid-volume-estimates" })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteMaterialMovementSolidVolumeEstimate(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/material-movement-solid-volume-estimate/${id}`)

        this.success = response.data.message

        this.solidVolumeEstimates = this.solidVolumeEstimates.filter(estimate => estimate.id !== id)
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})