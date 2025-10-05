import { useState } from "react";
import { Buttons } from "./buttons";
import { Inputs } from "./inputs";

export default function AddTask( { onTaskCreate } ) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const msg = 'Porfavor preencha os campos!'

    return (
        <div className="flex flex-col flex-wrap bg-slate-200 p-6 shadow rounded-md space-y-4">
            <Inputs 
                type="text"
                placeholder="Digite o título da sua tarefa..."
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}
            />
            <Inputs 
                type="text"
                placeholder="Digite a descrição da sua tarefa..."
                value={desc}
                onChange={(event) => {setDesc(event.target.value)}}
            />

            <Buttons
                onClick={() => {
                    if (!title.trim() || !desc.trim()) {
                        return alert(msg)
                    } else {
                        onTaskCreate(title, desc)
                    }

                    setTitle("");
                    setDesc("");
                }}
            >
                Adicionar
            </Buttons>
        </div>
    );
}