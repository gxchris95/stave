import React from 'react';
<<<<<<< HEAD
import {IOntology, ISelectOption, IScopeConfigs} from '../lib/interfaces';
import {isAvailableScope, isEntryAnnotation, shortId} from '../lib/utils';
import Select from 'react-select';
import style from '../styles/ScopeSelectorProp.module.css';
import {useTextViewerDispatch} from '../contexts/text-viewer.context';
=======
import { IOntology, ISelectOption } from '../lib/interfaces';
import { isEntryAnnotation, shortId } from '../lib/utils';
import Select from 'react-select';
import style from '../styles/ScopeSelectorProp.module.css';
import { useTextViewerDispatch } from '../contexts/text-viewer.context';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

export type ScopeSelectorProp = {
  ontology: IOntology;
  selectedScopeId: string | null;
<<<<<<< HEAD
  scopeConfig: IScopeConfigs;
=======
  selectedScopeIndex: number;
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
};

export default function ScopeSelector({
  ontology,
  selectedScopeId,
<<<<<<< HEAD
  scopeConfig,
=======
  selectedScopeIndex,
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
}: ScopeSelectorProp) {
  const dispatch = useTextViewerDispatch();
  const legendTypeOptions: {
    value: string | null;
    label: string;
  }[] = ontology.definitions
    .filter(entry => {
<<<<<<< HEAD
      return (
        isEntryAnnotation(ontology, entry.entryName) &&
        isAvailableScope(scopeConfig, entry.entryName)
      );
=======
      return isEntryAnnotation(ontology, entry.entryName);
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    })
    .map(def => {
      return {
        value: def.entryName,
        label: shortId(def.entryName),
      };
    });

<<<<<<< HEAD
  legendTypeOptions.unshift({value: null, label: 'All'});
=======
  legendTypeOptions.unshift({ value: null, label: 'All' });
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

  const selectedLegendTypeOptions = legendTypeOptions.find(legendType => {
    return selectedScopeId === legendType.value;
  });

  return (
    <Select
      className={style.input}
      value={selectedLegendTypeOptions}
      onChange={item => {
        dispatch({
          type: 'set-scope',
          scopeId: (item as ISelectOption).value,
        });
      }}
      options={legendTypeOptions}
    />
  );
}
