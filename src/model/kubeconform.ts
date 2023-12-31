export interface KubeconformResult {
  resources: KubeconformResultEntry[]
}

export interface KubeconformResultEntry {
  filename: string
  kind: string
  name: string
  version: string
  status: string
  msg: string
  validationErrors: KubeconformValidationError[]
}

export interface KubeconformValidationError {
  path: string
  msg: string
}
