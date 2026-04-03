import { createContext, useContext, useState} from 'react';

const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ childen }){
    const [carrinho, setCarrinho] = useState([]);

    const adicionar = (produto) => {
        setCarrinho(prev => {
            const existe = prev.find(item => item.id === produto.id);
            if (existe){
                return prev.map(item =>
                    item.id === produto.id ? { ... item, quantidade: item.quantidade + 1 } : item
                );
            }
            return [...prev, { ...produto, quantidade:1 }];
        })
    }
    const aumentar = (id) => {
        setCarrinho(prev =>
            prev.map(item => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item)
        )
    }
    const diminuir = (id) => {
    setCarrinho(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item)
        .filter(item => item.quantidade > 0)
    );
  };

  const remover = (id) => {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar, aumentar, diminuir, remover, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);
