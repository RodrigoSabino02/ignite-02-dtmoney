import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){

    useEffect(() => {
        api.get('transactions')
        .then(res => console.log(res.data))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de websites</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Trabalho</td>
                        <td>25/08/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 2.000,00</td>
                        <td>casa</td>
                        <td>25/08/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de websites</td>
                        <td>R$ 12.000,00</td>
                        <td>Trabalho</td>
                        <td>25/08/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}