import React from 'react';
import Task from "../services/Clases";

class Principal extends React.Component{
    state={
        tem1: [],
        tem2:[],
        title: "",
        description:"",
        agregar: [
            {
                tit:"Tit1",
                desc:"description"
            }
        ]
    };
    handleChangeInput= (es, input) =>{
        const newState = {};
        newState[input] = es.target.value;
        this.setState(newState);
    };
    handleAddTask = () => {
        this.setState((currentState) => ({
                tem2: [
                    ...currentState.tem2,
                    {
                        name: currentState.title,
                        description: currentState.description



                    }
                ]

            })
        )
    };
    async componentDidMount() {
        this.setState({tem1: await Task.getClase()});
        this.setState({tem2: this.state.tem1['hydra:member']});

    }
    render() {
        const{title,description,agregar,tem1,tem2}=this.state;

        return(
            <div className="Contenedor" >
                {this.state.title}
                <input onChange={(es)=>this.handleChangeInput(es, 'title')} value={title} />
                <br/>
                <input onChange={(es)=>this.handleChangeInput(es, 'description')} value={description} />
                <div>
                    <button onClick={this.handleAddTask}>Agregar</button>
                </div>
                <div>
                    {
                        tem2.map((item)=> (
                            <ul>
                                <li>{item.name}</li>
                                <li>{item.description}</li>
                            </ul>
                            )

                        )
                    }
                </div>

            </div>

        )

    }
}

export default Principal;