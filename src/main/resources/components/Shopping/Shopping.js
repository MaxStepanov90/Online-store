class Shopping {

    handlerClear(){
        ROOT_SHOPPING.innerHTML = '';
    }
    render() {
        const productStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id, name, price}) => {
            if (productStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td class="shopping-element__name">⚡️ ${name}</td>
                    <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handlerClear()"></div>
            <table>
            ${htmlCatalog}
                <tr>
                    <td class="shopping-element__name">✔️️ Сумма: </td>
                    <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                </tr>
            </table>
            </div>
            `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();