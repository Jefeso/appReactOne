import { Drawer } from 'expo-router/drawer';
import { CarrinhoProvider } from '../context/CarrinhoContext';

export default function Layout() {
  return (
    <CarrinhoProvider>
      <Drawer 
        screenOptions={{ 
          headerShown: true, 
          headerStyle: { backgroundColor: '#2d0a4e' }, 
          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#1a0a2e', 
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#888',
        }}
      >
        <Drawer.Screen name="index" options={{ title: 'Catálago', drawerLabel: 'Início' }} />
        <Drawer.Screen name="carrinho" options={{ title: 'Carrinho', drawerLabel: 'Carrinho' }} />
      </Drawer>
    </CarrinhoProvider>
  );
}