import React from 'react';
import {ILink} from '../lib/interfaces';
import Attributes from './Attributes';
<<<<<<< HEAD:src/nlpviewer/components/LinkDetail.tsx
import {useTextViewerDispatch} from '../contexts/text-viewer.context';
import {OnEventType} from './TextViewer';
=======
import { useTextViewerDispatch } from '../contexts/text-viewer.context';
import { OnEventType } from './TextViewer';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/LinkDetail.tsx

export interface LinkDetailProp {
  link: ILink | null;
  onEvent?: OnEventType;
}

<<<<<<< HEAD:src/nlpviewer/components/LinkDetail.tsx
export default function LinkDetail({link, onEvent}: LinkDetailProp) {
=======
export default function LinkDetail({ link, onEvent }: LinkDetailProp) {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/LinkDetail.tsx
  const dispatch = useTextViewerDispatch();

  if (link === null) {
    return null;
  }

  return (
    <div>
      <Attributes
        attributes={{
          id: link.id,
          ...link.attributes,
        }}
      />

      <div>
        <button
          onClick={() => {
            if (onEvent) {
              onEvent({
                type: 'link-delete',
                linkId: link.id,
              });
            }

            dispatch({
              type: 'delete-link',
              linkId: link.id,
            });
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
}
