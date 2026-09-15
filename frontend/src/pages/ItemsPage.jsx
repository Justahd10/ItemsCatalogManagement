// Componentes
import ToolBar from "../components/toolbar/ToolBar"
import Items from "../components/items/Item"
import SideBar from "../components/sidebar/SideBar"
import ItemDialog from "../components/item-dialog/ItemDialog"
import PaginationBar from "../components/pagination-bar/PaginationBar"
// Contextos
import { DialogContentContext } from "../contexts/DialogContext"
// Hooks nativos
import { useContext } from "react"
// Hooks customizados
import useItemsSearch from "../services/useItemsFetch"
// Estilização e dados da página
import "./ItemsPage.css"
import pageContent from "./content.json"



// Dados de conteúdo da página
const { sideBar, itemDialog, toolBar } = pageContent

// Auxilia na renderização do ItemDialog.Content
function renderDialogContent(dialogType, itemDatas){
    const content = <ItemDialog.Form.Root key={itemDatas.id} 
    dialogType={dialogType} itemDatas={itemDatas}
    >
      {
        dialogType === "deleteItem" ?
        <p>Deseja mesmo excluir {itemDatas.name}?</p> :
        <>
          <ItemDialog.Form.NameField />

          {
              itemDialog.selectionFields.map(select=> (
                  <ItemDialog.Form.SelectionField
                  key={select.label}
                  label={select.label} name={select.name}
                  >
                      {
                          select.options.map(option=> {
                              
                              return (
                                  <option key={option.label}
                                  value={option.value}
                                  >
                                      {option.label}
                                  </option>
                              )
                          })
                      }
                  </ItemDialog.Form.SelectionField>
              ))
          }
        </>
      }
    </ItemDialog.Form.Root>

    return content
}


const ItemsPage = ()=>{
    // Contexto das informações sobre o dialog em aberto
    const {
        dialogContent: { type: dialogType, itemDatas }, dialogRef
    } = useContext(DialogContentContext)

    // Consultas com base no contexto de pesquisa
    const { query } = useItemsSearch()

    return (
        <>
            {/* Caixa de diálogo para criação ou edição de item */}
            <ItemDialog.Root dialogRef={dialogRef}>
                <ItemDialog.Header dialogRef={dialogRef} 
                label={itemDialog[dialogType].title}
                />

                <ItemDialog.Content>
                    {renderDialogContent(dialogType, itemDatas)}
                </ItemDialog.Content>

                <ItemDialog.Actions.Root>
                    <ItemDialog.Actions.Cancel dialogRef={dialogRef}/>
                    <ItemDialog.Actions.Submit
                    formId={`dialog-form-${itemDatas.id}`}
                    label={itemDialog[dialogType].submitButton}
                    />
                </ItemDialog.Actions.Root>
            </ItemDialog.Root>

            <aside className="">
                {/* Barra lateral de filtro para pesquisa */}
                <SideBar.Root>
                    {
                        sideBar.filters.map(filter =>(
                            <SideBar.Filter
                                key={filter.attrName}
                                label={filter.label}
                                attrName={filter.attrName}
                            >
                                {
                                    filter.attributes.map(attr =>(
                                        <SideBar.FilterItem
                                            key={attr.name}
                                            label={attr.label}
                                            name={attr.name}
                                        />
                                    ))
                                }
                            </SideBar.Filter>
                        ))
                    }
                </SideBar.Root>
            </aside>

            <main className="">
                {/* Barra de ferramentas para ações primárias */}
                <ToolBar.Root>
                    <ToolBar.SearchField />
                    {
                        toolBar.selectorFields.map(select=> (
                            <ToolBar.SelectorField key={select.name}
                            name={select.name} label={select.label}
                            >
                                {
                                    select.options.map(option=> (
                                        <option key={option.value}
                                        value={option.value}>
                                            {option.label}
                                        </option>
                                    ))
                                }
                            </ToolBar.SelectorField>
                        ))
                    }
                    <ToolBar.Actions.Root>
                        <ToolBar.Actions.CreateItem />
                    </ToolBar.Actions.Root>
                </ToolBar.Root>

                {/* Listagem de itens com base na pesquisa */}
                <Items.Root>
                    {
                        query.data && 
                        query.data.response.payload.map(item =>(
                            <Items.Item.Root key={item.id}>
                                <Items.Item.Info
                                id={item.id} name={item.name}
                                />
                                <Items.Item.Actions itemData={item} />
                            </Items.Item.Root>
                        ))
                    }
                    {
                        query.isPending && 
                        <div>Carregando...</div>
                    }
                    {
                        query.isError &&
                        <div>Não foi possível a consulta</div>
                    }
                </Items.Root>
            </main>

            {/* Barra de navegação por páginas */}
            <aside>
                {
                    query.data &&
                    <>
                        <PaginationBar.Root>
                            <PaginationBar.Stepper.Previus />
                            <PaginationBar.Center 
                            totalItems={
                                query.data.response.headers.totalItems
                            }/>
                            <PaginationBar.Stepper.Next 
                            totalItems={
                                query.data.response.headers.totalItems
                            }
                            />
                        </PaginationBar.Root>
                    </>
                }
            </aside>

        </>
    )
}

export default ItemsPage