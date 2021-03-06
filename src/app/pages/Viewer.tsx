<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import NLPViewer, {
  ISinglePack,
  IOntology,
  IProjectConfigs,
  transformPack,
  transformBackAnnotation,
  transformBackLink,
  transformProjectConfig,
} from '../../nlpviewer';
import groupPlugin from '../../plugins/group/Group';
//import {layout} from '../layout';
import dialoguePlugin from '../../plugins/dialogue_box/DialogueBox';
import {useParams} from 'react-router-dom';
import {
  fetchDocOntology,
  fetchDocProjectConfig,
=======
import React, { useEffect, useState } from 'react';
import NLPViewer, {
  ISinglePack,
  IOntology,
  transformPack,
  transformBackAnnotation,
  transformBackLink,
} from '../../nlpviewer';
import groupPlugin from '../../plugins/group/Group';
import {layout} from '../layout';
import dialoguePlugin from '../../plugins/dialogue_box/DialogueBox';
import { useParams } from 'react-router-dom';
import {
  fetchDocOntology,
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  addAnnotation,
  deleteAnnotation,
  addLink,
  deleteLink,
<<<<<<< HEAD
=======

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
} from '../lib/api';

interface WholePack {
  singlePack: ISinglePack;
  ontology: IOntology;
}

<<<<<<< HEAD
interface ProjectConfig {
  config: IProjectConfigs;
}

function Viewer() {
  const {id} = useParams();
  const [pack, setPack] = useState<WholePack | null>(null);
  const [config, setConfig] = useState<ProjectConfig | null>(null);

  useEffect(() => {
    if (id) {
=======
function Viewer() {
  let { id } = useParams();
  const [pack, setPack] = useState<WholePack | null>(null);

  useEffect(() => {
    if (id) {

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
      fetchDocOntology(id).then(data => {
        const [singlePackFromAPI, ontologyFromAPI] = transformPack(
          data.textPack,
          data.ontology
        );

        setPack({
          singlePack: singlePackFromAPI,
          ontology: ontologyFromAPI,
        });
      });
<<<<<<< HEAD

      fetchDocProjectConfig(id).then(data => {
        setConfig({
          config: transformProjectConfig(data.config),
        });
      });
    }
  }, [id]);

  if (!pack || !config) {
=======
    }
  }, [id]);

  if (!pack) {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    return <div>Loading...</div>;
  }

  return (
    <NLPViewer
      textPack={pack.singlePack}
      ontology={pack.ontology}
<<<<<<< HEAD
      projectConfig={config.config}
      // plugins={[groupPlugin]}
      plugins={[groupPlugin, dialoguePlugin]}
      onEvent={event => {
        if (!id) return;

        if (event.type === 'annotation-add') {
          const {...annotation} = event;

          const b = annotation.span.begin;
          const e = annotation.span.end;

          // Validate Span before adding.
          if (b < e && b >= 0 && e <= pack.singlePack.text.length) {
            const annotationAPIData = transformBackAnnotation(annotation);

            addAnnotation(id, annotationAPIData).then(({id}) => {
              annotation.id = id;

              setPack({
                singlePack: {
                  ...pack.singlePack,
                  annotations: [...pack.singlePack.annotations, annotation],
                },
                ontology: pack.ontology,
              });
            });
          } else {
            console.error(
              `Will not add annotation with span [${b}:${e}] in a document of length ${pack.singlePack.text.length}, which is considered invalid`
            );
          }
=======
      // plugins={[groupPlugin]}
      plugins={[groupPlugin, dialoguePlugin]}
      layout={layout}
      onEvent={event => {
        if (!id) return;

        console.log(event);

        if (event.type === 'annotation-add') {
          const { type, ...annotation } = event;
          const annotationAPIData = transformBackAnnotation(annotation);

          addAnnotation(id, annotationAPIData).then(({ id }) => {
            annotation.id = id;

            setPack({
              singlePack: {
                ...pack.singlePack,
                annotations: [...pack.singlePack.annotations, annotation],
              },
              ontology: pack.ontology,
            });
          });
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
        } else if (event.type === 'annotation-delete') {
          deleteAnnotation(id, event.annotationId).then(() => {
            setPack({
              singlePack: {
                ...pack.singlePack,
                annotations: pack.singlePack.annotations.filter(
                  a => a.id !== event.annotationId
                ),
              },
              ontology: pack.ontology,
            });
          });
        } else if (event.type === 'link-add') {
<<<<<<< HEAD
          const {...link} = event;
          const linkAPIData = transformBackLink(link);

          addLink(id, linkAPIData).then(({id}) => {
=======
          const { type, ...link } = event;
          const linkAPIData = transformBackLink(link);

          addLink(id, linkAPIData).then(({ id }) => {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
            link.id = id;
            setPack({
              singlePack: {
                ...pack.singlePack,
                links: [...pack.singlePack.links, link],
              },
              ontology: pack.ontology,
            });
          });
        } else if (event.type === 'link-delete') {
          deleteLink(id, event.linkId).then(() => {
            setPack({
              singlePack: {
                ...pack.singlePack,
                links: pack.singlePack.links.filter(a => a.id !== event.linkId),
              },
              ontology: pack.ontology,
            });
          });
        }
      }}
    />
  );
}

export default Viewer;
