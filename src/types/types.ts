export type MergedAuditState = {
  general: GeneralAuditFormType,
  criterias: WCAGAuditFormTypeList
}

export type GeneralAuditFormType = {
  customer: string,
  projectName: string,
  module: string,
  version: string,
  conformance: string,
  miscellaneous: string
}

export type WCAGAuditFormType = {
  category: string,
  guideLine: string,
  name: string,
  level: 'A' | 'AA' | 'AAA',
  version: string,
  reference: string,
  findings?: string, // richtext data
  uploads?: string[], // base64 string of image
  checkedStatus?: string
}

export type WCAGAuditFormTypeList = WCAGAuditFormType[]
