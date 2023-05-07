import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
    
      <TransactionsContainer>
      <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.139,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>07/05/2023</td>
            </tr>

            <tr>
              <td width="50%">Rodízio Japones</td>
              <td>
              <PriceHighlight variant="outcome">- R$ 139,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>07/05/2023</td>
            </tr>

            <tr>
              <td width="50%">Espetinho</td>
              <td>
              <PriceHighlight variant="outcome">- R$ 48,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>07/05/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}