// Componentes
import ToolBar from "../components/toolbar/ToolBar"
import Items from "../components/items/Item"
import SideBar from "../components/sidebar/SideBar"
import ItemDialog from "../components/item-dialog/ItemDialog"

// Contextos
import { DialogContentContext } from "../contexts/DialogContext"

// Hooks nativos
import { useContext, useRef } from "react"

// Hooks customizados
import useItemsSearch from "../services/useItemsFetch"

// Estilização e dados da página
import "./ItemsPage.css"
import pageContent from "./content.json"



// Dados de conteúdo da página
const { sideBar, itemDialog } = pageContent

// Auxilia na renderização do ItemDialog.Content
function renderDialogContent(dialogType, dialogContent){
    const content = dialogType === "deleteItem"?
    <p>Deseja mesmo excluir {null}</p> :
    <ItemDialog.Form.Root>
      <ItemDialog.Form.NameField 
      currenValue={null}
      />

        {
            itemDialog.selectionFields.map(select=> (
                <ItemDialog.Form.SelectionField
                key={select.label}
                label={select.label} name={select.name}
                >
                    {
                        select.options.map(option=> {
                            const selected = 
                            dialogContent[select.name] === option.value

                            return (
                                <option key={option.label}
                                value={option.value} 
                                selected={selected}>
                                    {option.label}
                                </option>
                            )
                        })
                    }
                </ItemDialog.Form.SelectionField>
            ))
        }
    </ItemDialog.Form.Root>

    return content
}


const ItemsPage = ()=>{
    const dialogRef = useRef(null)
    const { dialogContent, dialogType } = useContext(DialogContentContext)

    const { datas } = useItemsSearch()

    return (
        <>
            {/* Caixa de diálogo para criação ou edição de item */}
            <ItemDialog.Root dialogRef={dialogRef}>
                <ItemDialog.Header dialogRef={dialogRef} 
                label={itemDialog[dialogType].title}
                />

                <ItemDialog.Content>
                    {renderDialogContent(dialogType, dialogContent)}
                </ItemDialog.Content>

                <ItemDialog.Actions>
                <ItemDialog.Actions.Cancel dialogRef={dialogRef}/>
                <ItemDialog.Actions.Submit dialogType={dialogType}
                label={itemDialog[dialogType].submitButton}
                />
                </ItemDialog.Actions>
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

                    <ToolBar.Actions.Root>
                        <ToolBar.Actions.CreateItem dialogRef={dialogRef}/>
                    </ToolBar.Actions.Root>
                </ToolBar.Root>

                {/* Listagem de itens com base na pesquisa */}
                <Items.Root>
                    {
                        datas? datas.map(item =>(
                            <Items.Item.Root key={item.name}>
                                <Items.Item.Info
                                id={item.id} name={item.name}
                                />
                                <Items.Item.Actions
                                dialogRef={dialogRef}
                                itemData={item}
                                />
                            </Items.Item.Root>
                        )) : null
                    }
                </Items.Root>
            </main>
        </>
    )
}

export default ItemsPage