const pageConfig = {
  // Title for your status page
  title: "sun's Status Page"，
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.812300.xyz/'， label: 'Blog' }，
    { link: 'mailto:me@mail.812300.xyz'， label: 'Email Me'， highlight: true }，
  ]，
}

const workerConfig = {
  // Write KV at most every 3 分钟之前 unless the status changed
  kvWriteCooldownMinutes: 3，
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'mail_monitor'，
      // `name` is used at status page and callback message
      name: 'My Mail API Monitor'，
      // `method` should be a valid HTTP Method
      method: 'GET'，
      // `target` is a valid URL
      target: 'https://mail-api.812300.xyz'，
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor'，
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://example.com'，
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200]，
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000，
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare'，
        Authorization: 'Bearer YOUR_TOKEN_HERE'，
      }，
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'success'，
    }，
    // Example TCP Monitor
    {
      id: 'Gateway_monitor'，
      name: 'Gateway TCP Monitor'，
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING'，
      // `target` should be `host:port` for tcp monitors
      target: 'router.wg.812300.xyz:22'，
      tooltip: 'My application gateway status'，
      timeout: 5000，
    }，
  ]，
  notification: {
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai"，
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5，
  }，
  callbacks: {
    onStatusChange: async (
      env: any，
      monitor: any，
      isUp: boolean，
      timeIncidentStart: number，
      timeNow: number，
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    }，
    onIncident: async (
      env: any，
      monitor: any，
      timeIncidentStart: number，
      timeNow: number，
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    }，
  }，
}

// Don't forget this, otherwise compilation fails.
export { pageConfig， workerConfig }
