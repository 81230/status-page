const pageConfig = {
  title: "状态页",
  links: [
    { link: 'mailto:me@812300.xyz', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'mail_api_monitor',
      name: 'My Mail API Monitor',
      method: 'GET',
      target: 'https://mail-api.82300.xyz'
    },
    {
      id: 'gateway_monitor',
      name: 'My Application Gateway Monitor',
      method: 'TCP_PING',
      target: 'router.wg.812300.xyz:22'
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
