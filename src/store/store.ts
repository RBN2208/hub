import { create } from 'zustand';
import { WCAG } from '../data/criterias';
import { GeneralAuditFormType, WCAGAuditFormType, WCAGAuditFormTypeList } from '../types/types';

const initialGeneralData: GeneralAuditFormType = {
  customer: "",
  projectName: "",
  module: "",
  version: "",
  conformance: "",
  miscellaneous: ""
};

function getInitialData(key: string) {
  const storageData = JSON.parse(localStorage.getItem('audit'));
  if (storageData) {
    return storageData[key]
  }
  return null
}

export const useWCAGStore = create((set) => ({
  criteriaData: getInitialData('criterias') !== null ? getInitialData('criterias') : WCAG,
  generalData: getInitialData('general') !== null ? getInitialData('general') : initialGeneralData,
  updateCriteria: (name: string, updates: Partial<Pick<WCAGAuditFormType, 'findings' | 'uploads' | 'checkedStatus'>>) => {
    set((state) => ({
      criteriaData: state.criteriaData.map((criterion) => {
        if (criterion.name === name) {
          return { ...criterion, ...updates }
        } else {
          return criterion
        }
      })
    }));
  },
  setStateFromUpload: (general: GeneralAuditFormType, criterias: WCAGAuditFormTypeList) => {
    set(() => ({
      generalData: general,
      criteriaData: criterias
    }))
  },
  updateGeneral: (key: keyof typeof initialGeneralData, value: string) => {
    set((state) => ({
      generalData: {
        ...state.generalData,
        [key]: value
      }
    }));
  }
}));
