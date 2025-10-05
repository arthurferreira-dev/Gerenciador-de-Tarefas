import { useSearchParams, useNavigate } from "react-router-dom";
import { DivCenter } from "../components/divs";
import { Title } from "../components/title";
import { ChevronLeftIcon } from "lucide-react";

export default function PageTask() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const desc = searchParams.get('desc');
    const navigate = useNavigate();
    const Painel = (props) => {
        return <div className="bg-slate-200 p-4 rounded-md">{props.children}</div>
    }

    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <DivCenter>
                <div className="flex justify-center relative mb-6">
                    <button 
                        className="absolute left-0 top-0 bottom-0 text-slate-100 duration-300 hover:cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeftIcon/>
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>
                <Painel>
                    <h2 className="text-xl font-bold text-slate-600 mb-2">
                        {title}
                    </h2>
                    <p className="text-slate-600">
                        {desc}
                    </p>
                </Painel>
            </DivCenter>
        </div>
    );
}