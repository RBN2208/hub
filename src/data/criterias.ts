import { GeneralAuditFormType, WCAGAuditFormTypeList } from '../types/types';

export const GENERAL_AUDIT_FORM_TYPE_LABELS: GeneralAuditFormType = {
  customer: "Kunde",
  projectName: "Projektname",
  module: "Seite / Modul",
  version: "Version",
  conformance: "Konformitätslevel",
  miscellaneous: "Sonstiges"
}

export const WCAG: WCAGAuditFormTypeList = [
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.1 – Text Alternatives',
    name: '1.1.1 Non-text Content',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-content',
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.1 Audio-only and Video-only (prerecorded)',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-only-and-video-only-prerecorded'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.2 Captions (Prerecorded)',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.4 Captions (live)',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#captions-live'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.5 Audio Description (Prerecorded)',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-description-prerecorded'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.6 Sign Language (Prerecorded)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#sign-language-prerecorded'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.7 Extended Audio Description (Prerecorded)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#extended-audio-description-prerecorded'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.8 Media Alternative (Prerecorded)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#media-alternative-prerecorded'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.2 – Time-based media',
    name: '1.2.9 Audio-only (live)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-only-live'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.3 – Adaptable',
    name: '1.3.1 Info and Relationship',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationshipsd'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.3 – Adaptable',
    name: '1.3.2 Meaningful sequence',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.3 – Adaptable',
    name: '1.3.3 Sensory characteristics',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#sensory-characteristics'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.3 – Adaptable',
    name: '1.3.4 Orientation',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#orientation'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.3 – Adaptable',
    name: '1.3.5 Identify Input Purpose',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.3 – Adaptable',
    name: '1.3.6 Identify Purpose',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.1 Use of color',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#use-of-color'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.2 Audio Control',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-control'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.3 Contrast (minimum)',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.4 Resize text',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#resize-text'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.5 Images of Text',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#images-of-text'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.6 Contrast (Enhanced)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#contrast-enhanced'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.7 Low or No Background Audio',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#low-or-no-background-audio'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.8 Visual Presentation',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#visual-presentation'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.9 Images of Text (no exception)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#images-of-text-no-exception'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.10 Reflow',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#reflow'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.11 Non-text Contrast',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.12 Text Spacing',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#text-spacing'
  },
  {
    category: "Perceivable",
    guideLine: 'Guideline 1.4 – Distinguishable',
    name: '1.4.13 Content on Hover or Focus',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.1 – Keyboard Accessible',
    name: '2.1.1 Keyboard',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.1 – Keyboard Accessible',
    name: '2.1.2 No Keyboard Trap',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#no-keyboard-trap'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.1 – Keyboard Accessible',
    name: '2.1.3 Keyboard (No Exception)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard-no-exception'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.1 – Keyboard Accessible',
    name: '2.1.4 Character Key Shortcuts',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#character-key-shortcuts'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.2 – Enough Time',
    name: '2.2.1 Timing Adjustable',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#timing-adjustable'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.2 – Enough Time',
    name: '2.2.2 Pause, Stop, Hide',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.2 – Enough Time',
    name: '2.2.3 No Timing',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#no-timing'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.2 – Enough Time',
    name: '2.2.4 Interruptions',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#interruptions'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.2 – Enough Time',
    name: '2.2.5 Re-Authenticating',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#re-authenticating'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.2 – Enough Time',
    name: '2.2.6 Timeouts',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#timeouts'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.3 – Seizures and Physical Reactions',
    name: '2.3.1 Three Flashes or Below Treshold',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.3 – Seizures and Physical Reactions',
    name: '2.3.2 Three Flashes',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.3 – Seizures and Physical Reactions',
    name: '2.3.3 Animation from Interactions',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#animation-from-interactions'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.1 Bypass Blocks',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.2 Page Titled',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#page-titled'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.3 Focus Order',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-order'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.4 Link Purpose (In Context)',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.5 Multiple Ways',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#multiple-ways'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.6 Headings and Labels',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.7 Focus Visbible',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-visible'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.8 Location',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#location'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.9 Link Purpose (Link-only)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.10 Section Headings',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#section-headings'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.11 Focus not Obscured (Minium)',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-minimum'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.12 Focus not Obscured (Enhanced)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-enhanced'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.4 – Navigable',
    name: '2.4.13 Focus Appearance',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.1 Pointer Gestures',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-gestures'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.2 Pointer Cancellation',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-cancellation'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.3 Label in Name',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#label-in-name'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.4 Motion Actuation',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#motion-actuation'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.5 Target Site (Enhanced)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-enhanced'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.6 Concurrent Input Mechanisms',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#concurrent-input-mechanisms'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.7 Dragging Movements',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#dragging-movements'
  },
  {
    category: "Operable",
    guideLine: 'Guideline 2.5 – Input Modalities',
    name: '2.5.8 Target Size (Minimum)',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-minimum'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.1 – Readable',
    name: '3.1.1 Language of Page',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.1 – Readable',
    name: '3.1.2 Language of Parts',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-parts'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.1 – Readable',
    name: '3.1.3 Unusual Words',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#unusual-words'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.1 – Readable',
    name: '3.1.4 Abbreviations',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#abbreviations'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.1 – Readable',
    name: '3.1.5 Reading Level',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#reading-level'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.1 – Readable',
    name: '3.1.6 Pronunciation',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pronunciation'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.2 – Predictable',
    name: '3.2.1 On Focus',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#on-focus'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.2 – Predictable',
    name: '3.2.2 On Input',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#on-input'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.2 – Predictable',
    name: '3.2.3 Consistent Navigation',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-navigation'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.2 – Predictable',
    name: '3.2.4 Consistent Identification',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-identification'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.2 – Predictable',
    name: '3.2.5 Change on Request',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#change-on-request'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.2 – Predictable',
    name: '3.2.6 Consistent Help',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-help'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.1 Error Identification',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-identification'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.2 Labels or Instructions',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.3 Error Suggestion',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-suggestion'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.4 Error Prevention (Legal, Financial, Data)',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-legal-financial-data'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.5 Help',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#help'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.6 Error Prevention (all)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-all'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.7 Redundant Entry',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#redundant-entry'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.8 Accessible Authentication (Minimum)',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-minimum'
  },
  {
    category: "Understandable",
    guideLine: 'Guideline 3.3 – Input Assistance',
    name: '3.3.9 Accessible Authentication (Enhanced)',
    level: 'AAA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-enhanced'
  },
  {
    category: "Robust",
    guideLine: 'Guideline 4.1 – Compatible',
    name: '4.1.2 Name, Role, Value',
    level: 'A',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#name-role-value'
  },
  {
    category: "Robust",
    guideLine: 'Guideline 4.1 – Compatible',
    name: '4.1.3 Status Messages',
    level: 'AA',
    reference: 'https://www.w3.org/WAI/WCAG22/quickref/#status-messages'
  }
]
