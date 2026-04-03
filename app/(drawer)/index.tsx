import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { styles } from '../../styles/Style';
import Card from '../../components/Card';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { LinearGradient } from 'expo-linear-gradient';
import { PRODUTOS } from '../../produtos';
import { useCarrinho } from '../../context/CarrinhoContext';

export default function Home() {
  const { adicionar } = useCarrinho();

  const [fontsLoaded] = useFonts({ BebasNeue_400Regular });
  if (!fontsLoaded) return null;

  
  const ListHeader = (
    <>
      <View style={styles.banner}>
        <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/e1/29/8c/e1298c78b5ba484319a1527843a0bf58.jpg' }}>
          <View style={styles.badge}>
            <Text style={styles.txtbanner}>ShortSize</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.grid}>
        <Image source={require('../../assets/img/dominio.jpg')} style={styles.img} />
      </View>

      <View style={styles.corrido}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PRODUTOS.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => adicionar(item)}
            >
              <Card
                imageUrl={item.imagem}
                title={item.titulo}
                subTitle={`R$ ${item.preco.toFixed(2)}`}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={{ color: '#aaa', padding: 10, fontWeight: 'bold' }}>Todos os produtos</Text>
    </>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2d0a4e', 'rgb(35, 19, 44)', '#000000']}style={{ flex: 1 }}
      >
        <FlatList
          data={PRODUTOS}
          keyExtractor={item => item.id}
          ListHeaderComponent={ListHeader}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => adicionar(item)}>    
                <View style={styles.item}>
                    <Image source={{ uri: item.imagem }} style={styles.img} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.titulo}</Text>
                    <Text style={{ color: '#78ff78', fontSize: 12 }}>R$ {item.preco.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 80 }}
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={{ color: 'white' }}>Entre em Contato</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </LinearGradient>
    </View>
  );
}