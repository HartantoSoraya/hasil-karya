import adminCheckerRoutes from "./admin-checker"
import adminClientRoutes from "./admin-client"
import adminDriverRoutes from "./admin-driver"
import adminMaterialMovementRoutes from "./admin-material-movement"
import adminStationRoutes from "./admin-station"
import adminTruckRoutes from "./admin-truck"
import adminVendorRoutes from "./admin-vendor"

const adminRoutes = [
  ...adminCheckerRoutes,
  ...adminDriverRoutes,
  ...adminTruckRoutes,
  ...adminStationRoutes,
  ...adminMaterialMovementRoutes,
  ...adminVendorRoutes,
  ...adminClientRoutes
]

export default adminRoutes
