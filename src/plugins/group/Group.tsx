<<<<<<< HEAD
import React, {useState} from 'react';
import style from './Group.module.css';
import {IGroup, ISinglePack} from '../../nlpviewer';
=======
import React, { useState } from 'react';
import { State } from '../../nlpviewer';
import style from './Group.module.css';
import { IGroup, ISinglePack } from '../../nlpviewer';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
import {PluginComponentProp} from '../lib/interface';

function Group(props: PluginComponentProp) {
  const [dropGroupId, setDropGroupId] = useState<string | null>(null);

  if (!props.appState.textPack) {
    return null;
  }

  const dispatch = props.dispatch;
<<<<<<< HEAD
  const {textPack} = props.appState;
  const {groups} = textPack;
=======
  const { textPack } = props.appState;
  const { groups } = textPack;
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

  return (
    <div key={'plugin-group'} className={style.group_name_container}>
      {groups.map(group => {
        return (
          <div
            key={group.id}
            onDragEnter={event => {
              event.preventDefault();

              if (dropGroupId !== group.id) {
                setDropGroupId(group.id);
              }
            }}
            onDragOver={event => {
              event.preventDefault();
            }}
            onDragLeave={() => {
              setDropGroupId(null);
            }}
            onDrop={event => {
              event.preventDefault();

              const data = JSON.parse(event.dataTransfer.getData('text/plain'));

              if (data.type === 'drag-annotation') {
                dispatch({
                  type: 'add-member-to-group',
                  groupId: group.id,
                  memberId: data.annotationId,
                });
              }

              setDropGroupId(null);
            }}
            className={`${style.group}
                ${dropGroupId === group.id ? style.group_dropped : ''}`}
          >
            {group.members.map((member, i) => (
              <span
                key={i}
                className={style.member_item}
                onClick={() => {
                  if (group.memberType === 'annotation') {
                    dispatch({
                      type: 'jump-to-annotation',
                      annotationId: member,
                    });
                    dispatch({
                      type: 'select-annotation',
                      annotationId: member,
                    });
                  } else {
                    alert('TODO: select member of type other than annotation');
                  }
                }}
              >
                {getMemberDetail(group, member, textPack)}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function getMemberDetail(group: IGroup, member: string, textPack: ISinglePack) {
  if (group.memberType === 'annotation') {
    const annotation = textPack.annotations.find(ann => ann.id === member);
    if (annotation) {
<<<<<<< HEAD
      return textPack.text.substring(
        annotation.span.begin,
        annotation.span.end
      );
=======
      return textPack.text.substring(annotation.span.begin, annotation.span.end);
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    } else {
      return '';
    }
  } else {
    return 'link';
  }
}

<<<<<<< HEAD
function enabled() {
=======
function enabled(state: State) {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  return true;
}

const plugin = {
  name: 'Group',
  component: Group,
  enabled: enabled,
};

export default plugin;
