// Componentes compostos
import ToolBar from "../components/toolbar/ToolBar"
import Item from "../components/items/Item"
import SideBar from "../components/sidebar/SideBar"
import ItemDialog from "../components/item-dialog/ItemDialog"
// Contextos
import { ItemsSearchProvider } from "../contexts/ItemsSearch"
// Hooks nativos
import { useState } from "react"
// Hooks customizados
import useItemsSearch from "../services/useItemsFetch"
// Estilização e dados da página
import "./ItemsPage.css"
import pageContent from "./content.json"



const { sideBar, newItemDialog: dialog } = pageContent

const ItemsPage = ()=>{
    // Lógica para renderização das caixas de diálogo

    const { datas } = useItemsSearch()

    return (
        <ItemsSearchProvider>
            {/* Caixa de diálogo para criação ou edição de item */}

            <aside>
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

            <main>
                {/* Barra de ferramentas para ações primárias */}
                <ToolBar.Root>
                    <ToolBar.SearchField />
                    <ToolBar.Actions>
                        <ToolBar.Action type="" 
                        onClick={()=>{}}/>
                    </ToolBar.Actions>
                </ToolBar.Root>

                {/* Listagem de itens com base na pesquisa */}
                <section className="">
                    {
                        datas? datas.map(item =>(
                            <Item.Root>
                                <Item.Info
                                id={item.id} name={item.name}
                                />
                                <Item.Actions id={item.id}/>
                            </Item.Root>
                        )) : null
                    }
                </section>
            </main>
        </ItemsSearchProvider>
    )
}

export default ItemsPage