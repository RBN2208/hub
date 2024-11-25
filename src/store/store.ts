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

interface WCAGStoreState {
  criteriaData: WCAGAuditFormType[];
  generalData: GeneralAuditFormType;
  updateCriteria: (
    name: string,
    updates: Partial<Pick<WCAGAuditFormType, 'findings' | 'uploads' | 'checkedStatus'>>
  ) => void;
  resetState: () => void;
  setStateFromUpload: (general: GeneralAuditFormType, criterias: WCAGAuditFormTypeList) => void;
  updateGeneral: (
    key: keyof GeneralAuditFormType,
    value: string
  ) => void;
}

export const useWCAGStore = create<WCAGStoreState>((set) => ({
  criteriaData: getInitialData('criterias') !== null ? getInitialData('criterias') : WCAG,
  generalData: getInitialData('general') !== null ? getInitialData('general') : initialGeneralData,
  updateCriteria: (name: string, updates: Partial<Pick<WCAGAuditFormType, 'findings' | 'uploads' | 'checkedStatus'>>) => {
    set((state: WCAGStoreState) => ({
      criteriaData: state.criteriaData.map((criterion: WCAGAuditFormType) => {
        if (criterion.name === name) {
          return { ...criterion, ...updates }
        } else {
          return criterion
        }
      })
    }));
  },
  resetState: () => {
    set(() => ({
      generalData: initialGeneralData,
      criteriaData: WCAG
    }));
  },
  setStateFromUpload: (general: GeneralAuditFormType, criterias: WCAGAuditFormTypeList) => {
    set(() => ({
      generalData: general,
      criteriaData: criterias
    }))
  },
  updateGeneral: (key: keyof typeof initialGeneralData, value: Partial<Pick<WCAGAuditFormType, 'level' | 'version'>>) => {
    set((state: WCAGStoreState) => ({
      generalData: {
        ...state.generalData,
        [key]: value
      }
    }));
  }
}));
