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
  reference: string,
  findings?: string, // richtext data
  uploads?: File | FileList,
  checkedStatus?: string
}

export type WCAGAuditFormTypeList = WCAGAuditFormType[]
