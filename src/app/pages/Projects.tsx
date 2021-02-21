<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {fetchProjects, createProject, deleteProject} from '../lib/api';
import {Link, useHistory} from 'react-router-dom';
import {FileWithPath} from 'react-dropzone';
import DropUpload from '../components/dropUpload';
import {makeStyles} from '@material-ui/core/styles';
=======
import React, { useState, useEffect } from 'react';
import { fetchProjects, createProject, deleteProject } from '../lib/api';
import { Link, useHistory } from 'react-router-dom';
import {FileWithPath} from 'react-dropzone';
import DropUpload from '../components/dropUpload';
import { makeStyles } from '@material-ui/core/styles';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
<<<<<<< HEAD
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  ILegendAttributeConfig,
  ILegendConfig,
  IProjectConfigs,
  IOntology,
} from '../../nlpviewer';
import {isEntryAnnotation, camelCaseDeep} from '../../nlpviewer/lib/utils';
import JsonEditor from '../components/jsonEditor';
import {InputLabel} from '@material-ui/core';
=======
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight: 150,
  },

  title: {
    fontSize: 14,
  },
<<<<<<< HEAD

  jsonEditor: {
    marginBottom: 15,
  },
});
const PROJECT_TYPES = ['indoc', 'crossdoc'];

function Projects() {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [projects, setProjects] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [ontology, setOntology] = useState<string>('{}');
  const [multiOntology, setMultiOntology] = useState<string>('{}');
  const [config, setConfig] = useState<string>('{}');
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const [projectType, setProjectType] = useState<string>('indoc');

  const handleClickOpen = () => {
=======
  
});

function Projects() {
  const classes = useStyles();
  const [projects, setProjects] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [ontology, setOntology] = useState<string>('');
  const history = useHistory();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clearDialog = () => {
<<<<<<< HEAD
    setOntology('{}');
    setMultiOntology('{}');
    setConfig('{}');
=======
    setOntology('');
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    setName('');
  };

  useEffect(() => {
<<<<<<< HEAD
    updateProjects().catch(() => {
=======
    updateProjects().catch(e => {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
      history.push('/login');
    });
  }, [history]);

  function updateProjects() {
    return fetchProjects().then(projects => {
      setProjects(projects);
    });
  }

  function handleAdd() {
<<<<<<< HEAD
    if (projectType === 'indoc' && name && ontology !== '{}' && config) {
      createProject(projectType, name, ontology, config).then(() => {
        updateProjects();
      });
    } else if (
      projectType === 'crossdoc' &&
      name &&
      ontology !== '{}' &&
      multiOntology !== '{}' &&
      config
    ) {
      createProject(projectType, name, ontology, config, multiOntology).then(
        () => {
          updateProjects();
        }
      );
    } else {
      alert('Please fill in project name and upload ontology file.');
=======
    if (name && ontology){
      createProject(name, ontology).then(() =>{
        updateProjects();
      });
    } else{
      alert("Please fill in project name and upload ontology file.");
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    }
  }

  function handleDelete(id: string) {
    deleteProject(id).then(() => {
      updateProjects();
    });
  }

<<<<<<< HEAD
  function handleProjectTypeChange(type: string) {
    setProjectType(type);
  }

  function userAddFiles(
    acceptedFiles: FileWithPath[],
    file_type = 'single_pack'
  ) {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.readAsText(acceptedFiles[0]);
      reader.onload = function () {
        if (file_type === 'single_pack') {
          setOntology(reader.result as string);
          const defaultConfig = createDefaultConfig(reader.result as string);
          setConfig(JSON.stringify(defaultConfig));
        } else if (file_type === 'multi_pack') {
          setMultiOntology(reader.result as string);
        }
      };
    }
  }

  function createDefaultConfig(ontology: string): IProjectConfigs {
    const ontologyJson = JSON.parse(ontology);
    const ontologyObject: IOntology = camelCaseDeep(ontologyJson);
    const config: IProjectConfigs = {
      legendConfigs: {},
      scopeConfigs: {},
      layoutConfigs: {},
    };
    for (const entry of ontologyJson.definitions) {
      const entryName = entry.entry_name;
      // Scope configs should contain annotations only.
      if (isEntryAnnotation(ontologyObject, entryName)) {
        config['scopeConfigs'][entryName] = false;
      }

      const legendConfig: ILegendConfig = {
        is_selected: false,
        is_shown: true,
      };
      config['legendConfigs'][entryName] = legendConfig;
      if (entry.attributes && entry.attributes.length > 0) {
        const attributeConfig: ILegendAttributeConfig = {};
        config['legendConfigs'][entryName]['attributes'] = attributeConfig;
        for (const attribute of entry.attributes) {
          if (attribute.type === 'str') {
            attributeConfig[attribute.name] = false;
          }
        }
      }

      //TODO hard coded default layoutConfigs -- might need to change
      config['layoutConfigs']['center-middle'] = 'default-nlp';
      config['layoutConfigs']['left'] = 'default-meta';
      config['layoutConfigs']['right'] = 'default-attribute';
      config['layoutConfigs']['center-bottom'] = 'disable';
    }
    return config;
  }
=======
  function userAddFiles(acceptedFiles: FileWithPath[]) {
    if (acceptedFiles.length > 0){    
      const reader = new FileReader();
      reader.readAsText(acceptedFiles[0]);
      reader.onload = function() {
        setOntology(reader.result as string);        
      }
    }
  }  
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

  return (
    <div className={classes.root}>
      <div className="content">
<<<<<<< HEAD
        <Typography variant="h3">All Projects:</Typography>
      </div>
      <div className="content">
        <Grid
          container
          className={classes.root}
          justify="flex-start"
          spacing={2}
        >
          {projects.map(d => (
            <Grid key={d.id} item>
              <Card className={classes.root}>
                <CardHeader
                  title={d.name}
                  action={
                    <IconButton
                      onClick={() => handleDelete(d.id)}
                      aria-label="delet"
                    >
                      <DeleteForeverSharpIcon />
                    </IconButton>
=======
        <Typography variant="h3">
              All Projects:
          </Typography>
      </div>
      <div className="content">
        <Grid 
        container 
        className={classes.root} 
        justify="flex-start" 
        spacing={2}>
          {projects.map(d => (         
            <Grid key={d.id} item>
              <Card className={classes.root}>
                <CardHeader 
                  title={d.name} 
                  action={
                  <IconButton 
                  onClick={() => handleDelete(d.id)}
                  aria-label="delet"
                  >
                    <DeleteForeverSharpIcon />
                  </IconButton >
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
                  }
                />
                {/* CardActionArea part is for adding project introduction in the future */}
                <CardActionArea>
                  <CardContent>
<<<<<<< HEAD
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/project/${d.id}`}
                    size="small"
                    color="primary"
=======
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button 
                  component={Link} to={`/project/${d.id}`} 
                  size="small" 
                  color="primary"
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
                  >
                    Learn More
                  </Button>
                </CardActions>
<<<<<<< HEAD
              </Card>
=======
              </Card>        
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
            </Grid>
          ))}
          <Grid item>
            <Card className={classes.root}>
              <CardHeader title="New Project" />
              <CardActions>
                <IconButton onClick={handleClickOpen}>
                  <PostAddSharpIcon fontSize="large" />
                </IconButton>
<<<<<<< HEAD
                <Dialog
                  open={open}
                  onClose={handleClose}
                  fullWidth={true}
                  maxWidth={'md'}
                >
                  <DialogContent>
                    <Grid>
                      <InputLabel id="label">Project Type:</InputLabel>
                      <Select
                        labelId="label"
                        id="select"
                        value={projectType}
                        onChange={e =>
                          handleProjectTypeChange(e.target.value as string)
                        }
                      >
                        {PROJECT_TYPES.map(d => (
                          <MenuItem value={d}>{d}</MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    {projectType === 'indoc' ? (
                      <div>
                        <div>
                          <TextField
                            variant="outlined"
                            label="Project Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            autoFocus
                            fullWidth
                            margin="normal"
                          />
                        </div>
                        <JsonEditor
                          className={classes.jsonEditor}
                          jsonText={ontology}
                          onChangeJsonText={(text: string) => setOntology(text)}
                        />
                        <JsonEditor
                          className={classes.jsonEditor}
                          jsonText={config}
                          onChangeJsonText={(text: string) => setConfig(text)}
                        />
                        <div>
                          <DropUpload
                            fileLimit={1048576}
                            fileDropFunc={userAddFiles}
                            mimeType="application/json"
                            allowMultiple={false}
                          />
                        </div>
                        <div>
                          <Button
                            onClick={() => {
                              handleAdd();
                              handleClose();
                              clearDialog();
                            }}
                            color="primary"
                            size="small"
                            variant="contained"
                            disableElevation
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>
                          <TextField
                            variant="outlined"
                            label="Project Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            autoFocus
                            fullWidth
                            margin="normal"
                          />
                        </div>
                        <div>
                          <DropUpload
                            fileLimit={1048576}
                            fileDropFunc={(file: FileWithPath[]) =>
                              userAddFiles(file, 'single_pack')
                            }
                            mimeType="application/json"
                            allowMultiple={false}
                          />
                        </div>
                        <div>
                          <DropUpload
                            fileLimit={1048576}
                            fileDropFunc={(file: FileWithPath[]) =>
                              userAddFiles(file, 'multi_pack')
                            }
                            mimeType="application/json"
                            allowMultiple={false}
                          />
                        </div>
                        <div>
                          <Button
                            onClick={() => {
                              handleAdd();
                              handleClose();
                              clearDialog();
                            }}
                            color="primary"
                            size="small"
                            variant="contained"
                            disableElevation
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    )}
=======
                <Dialog open={open} onClose={handleClose}>
                  <DialogContent>
                    <div>
                      <TextField 
                      variant="outlined"
                      label="Project Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      autoFocus
                      fullWidth
                      margin="normal"
                      />
                    </div>
                    <div>
                      <TextField
                      id="outlined-multiline-flexible"
                      label="Ontology Body"
                      value={ontology}
                      onChange={e => setOntology(e.target.value)}
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      />
                    </div> 
                    <div>
                      <DropUpload
                        fileLimit={1048576}
                        fileDropFunc={userAddFiles}
                        mimeType='application/json'
                        allowMultiple={false}
                      />
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                        handleAdd();
                        handleClose();
                        clearDialog();
                        }}  
                        color="primary"
                        size="small" 
                        variant="contained"
                        disableElevation
                      >
                        Add
                      </Button>
                    </div>

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
                  </DialogContent>
                </Dialog>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
<<<<<<< HEAD
      </div>
=======
      </div>     
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    </div>
  );
}

export default Projects;
