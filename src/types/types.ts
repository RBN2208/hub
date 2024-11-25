export type MergedAuditState = {
  general: GeneralAuditFormType,
  criterias: WCAGAuditFormTypeList
}

export interface GeneralAuditFormType {
  customer: string;
  projectName: string;
  module: string;
  version: string;
  conformance: string;
  miscellaneous: string;
}

export type WCAGAuditFormType = {
  category: string,
  guideLine: string,
  name: string,
  level: 'A' | 'AA' | 'AAA',
  reference: string,
  version?: string,
  findings?: string, // richtext data
  uploads?: string[], // base64 string of image
  checkedStatus?: string
}

export type WCAGAuditFormTypeList = WCAGAuditFormType[]
