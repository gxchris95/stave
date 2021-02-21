<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {fetchDocuments, createDocument, deleteDocument} from '../lib/api';
import {Link, useHistory} from 'react-router-dom';

function Documents() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
=======
import React, { useState, useEffect } from 'react';
import { fetchDocuments, createDocument, deleteDocument } from '../lib/api';
import { Link, useHistory } from 'react-router-dom';

function Documents() {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  const [docs, setDocs] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [pack, setPack] = useState<string>('');
  const [ontology, setOntology] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
<<<<<<< HEAD
    updateDocs().catch(() => {
=======
    updateDocs().catch(e => {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
      history.push('/login');
    });
  }, [history]);

  function updateDocs() {
    return fetchDocuments().then(docs => {
      setDocs(docs);
    });
  }

  function handleAdd() {
<<<<<<< HEAD
    const project_id = window.location.pathname.split('/').pop()!;
=======
    let project_id = window.location.pathname.split("/").pop() !;
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    createDocument(name, pack, project_id).then(() => {
      updateDocs();
    });
  }

  function handleDelete(id: string) {
    deleteDocument(id).then(() => {
      updateDocs();
    });
  }

  if (!docs.length) {
<<<<<<< HEAD
    console.log('empty result');
=======
    console.log('empty result')
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    return null;
  }

  return (
    <div className="content">
      <div className="content_left">
        <h2>All text packs:</h2>
        {docs.map(d => (
          <ul key={d.id}>
            <li>
              <Link to={`/documents/${d.id}`}>{d.name}</Link>{' '}
              <button onClick={() => handleDelete(d.id)}>X</button>
            </li>
          </ul>
        ))}
      </div>

      <div>
        <h2>new pack</h2>
        <div>
          <input
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
            name="name"
          />
        </div>
        <div>
          <textarea
            placeholder="text pack body"
            value={pack}
            onChange={e => setPack(e.target.value)}
            name="textpack"
            id=""
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder="ontology body"
            value={ontology}
            onChange={e => setOntology(e.target.value)}
            name="ontology"
            id=""
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Documents;
