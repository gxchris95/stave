<<<<<<< HEAD
import React, {useEffect} from 'react';
import TextViewer, {OnEventType} from './components/TextViewer';
=======
import React, { useEffect } from 'react';
import TextViewer, { OnEventType } from './components/TextViewer';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
import {
  TextViewerProvider,
  useTextViewerDispatch,
} from './contexts/text-viewer.context';

import './lib/log';
import './styles/normalize.css';
import './styles/global.css';
<<<<<<< HEAD
import {
  ISinglePack,
  IOntology,
  IPlugin,
  IProjectConfigs,
} from './lib/interfaces';
=======
import { ISinglePack, IOntology, IPlugin, ILayout } from './lib/interfaces';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

export * from './lib/transform';
export * from './lib/interfaces';
export * from './contexts/text-viewer.context';

export interface NLPViewerProp {
  textPack: ISinglePack;
  ontology: IOntology;
  plugins: IPlugin[];
<<<<<<< HEAD
  projectConfig: IProjectConfigs;
=======
  layout: ILayout;
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  onEvent?: OnEventType;
}

export default function NLPViewer(props: NLPViewerProp) {
  return (
    <TextViewerProvider>
      <TextViewerFetchContainer {...props} />;
    </TextViewerProvider>
  );
}

function TextViewerFetchContainer(props: NLPViewerProp) {
  const dispatch = useTextViewerDispatch();

  useEffect(() => {
    dispatch({
      type: 'set-text-pack',
      textPack: props.textPack,
    });

    dispatch({
      type: 'set-ontology',
      ontology: props.ontology,
    });
  }, [dispatch, props.textPack, props.ontology]);

<<<<<<< HEAD
  return (
    <TextViewer
      plugins={props.plugins}
      onEvent={props.onEvent}
      projectConfig={props.projectConfig}
    />
  );
=======
  return <TextViewer plugins={props.plugins} onEvent={props.onEvent} layout={props.layout}/>;
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
}
