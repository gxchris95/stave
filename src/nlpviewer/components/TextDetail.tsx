import React from 'react';
<<<<<<< HEAD:src/nlpviewer/components/TextDetail.tsx
import {IEntryDefinition, IAttributes} from '../lib/interfaces';
=======
import { IEntryDefinition, IAttributes, IOntology } from '../lib/interfaces';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/TextDetail.tsx
import {
  useTextViewerState,
  useTextViewerDispatch,
} from '../contexts/text-viewer.context';
import Tab from './Tab';
import Attributes from './Attributes';
import LegendList from './LegendList';

export interface TextDetailProp {
  attributes: IAttributes;
<<<<<<< HEAD:src/nlpviewer/components/TextDetail.tsx
  annotationLegends: (IEntryDefinition & {color: string})[];
  linkLegends: (IEntryDefinition & {color: string})[];
=======
  annotationLegends: (IEntryDefinition & { color: string })[];
  linkLegends: (IEntryDefinition & { color: string })[];
  ontology: IOntology;
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/TextDetail.tsx
}

export default function TextDetail({
  attributes,
  annotationLegends,
  linkLegends,
<<<<<<< HEAD:src/nlpviewer/components/TextDetail.tsx
=======
  ontology,
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/TextDetail.tsx
}: TextDetailProp) {
  const {selectedLegendIds, selectedLegendAttributeIds} = useTextViewerState();

  const dispatch = useTextViewerDispatch();

  const legendTabItem = {
    title: 'legend',
    body: () => (
      <>
        <LegendList
          title="Annotation Legends"
          legends={annotationLegends}
          selectedLegendIds={selectedLegendIds}
          selectedLegendAttributeIds={selectedLegendAttributeIds}
          dispatch={dispatch}
        />

        <LegendList
          title="Link Legends"
          legends={linkLegends}
          selectedLegendIds={selectedLegendIds}
          selectedLegendAttributeIds={selectedLegendAttributeIds}
          dispatch={dispatch}
        />
      </>
    ),
  };

  const metadataTabItem = {
    title: 'metadata',
    body: () => (
      <div>
        <Attributes attributes={attributes} />
      </div>
    ),
  };

  return <Tab tabs={[legendTabItem, metadataTabItem]} activeTabIndex={0}></Tab>;
}
