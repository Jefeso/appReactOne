import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCarrinho } from '../../context/CarrinhoContext';

export default function Carrinho() {
    const { carrinho, aumentar, diminuir, remover, total } = useCarrinho();

    return (
        <LinearGradient colors={['#2d0a4e', 'rgb(35, 19, 44)', '#000000']} style={{flex:1}}>
        {carrinho.lenght ===0 ? (
            <View style={s.vazio}>
                <Text>Seu Carrinho está vazio</Text>
            </View>
        ) : (
            <FlatList 
                data={carrinho}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 12, paddingBottom: 160}}
                renderItem={({ item }) => (
                    <View style={s.card}>
                        <Image source={{ uri: item.imagem }} style={s.img} /> 
                        <View style={s.info}>
                            <Text style={s.titulo} numberOfLines={2}>{item.titulo}</Text>
                            <Text style={s.preco}>R$ {item.preco.toFixed(2)}</Text>

                            <View style={s.controles}>
                                <TouchableOpacity style={s.btn} onPress={() => diminuir(item.id)}>
                                    <Text style={s.btnTxt}>-</Text>
                                </TouchableOpacity>

                                <Text style={s.quantidade}>{item.quantidade}</Text>
                                
                                <TouchableOpacity style={s.btn} onPress={() => aumentar(item.id)}>
                                    <Text style={s.btnTxt}>+</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={s.btnRemover} onPress={() => remover(item.id)}>
                                    <Text style={s.btnTxt}>Remover</Text>
                                </TouchableOpacity>
                            </View>

                            <text style={s.subtotal}>
                                Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
                            </text>
                        </View>
                    </View>
                )}
            />
        )}

        {carrinho.length > 0 && (
            <View style={s.rodape}>
                <Text style={s.totalLabel}>Total:</Text>
                <Text style={s.totalValor}>R$ {total.toFixed(2)}</Text>
                <TouchableOpacity style={s.btnFinalizar}>
                    <Text style={s.btnFinalizarTxt}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        )}
        </LinearGradient>
    );
}

const s = StyleSheet.create({
    vazio: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    vazioTxt: { color: '#aaa', fontSize: 18 },
    card: {
        flexDirection:'row',
        backgroundColor: '#1e0a35',
        borderRadius: 10,
        marginBottom: 12,
        overflow:'hidden',
        borderWidth: 1,
        borderColor: '#4a1a6e'
    },

    img: { width: 100, 
        height:100
     },

     info:{
        flex:1
     },

     titulo: {
        color: 'white',
     },

    preco: {
    color: '#78ff78',
    },

    subtotal: {
        color: '#ccc'
    },

    controles: {
        flexDirection: 'row',
    },

    btn: {
        backgroundColor: '#4a1a6e',
    },

    btnRemover: {
        backgroundColor: '#6e1a1a',
    },

    btnTxt: {
        color: 'white',
    },

    quantidade: {
        color: 'white',
    },

    rodape: {
        position: 'absolute',
    },

    totallabel: {
        color: '#aaa',
    },

    totalValor: {
        color: '#white',
    },

    btnFinalizar: {
        backgroundColor: '#7b2dff'
    },

    btnFlinalizarTxt: {
        color: 'white',
    },
})
