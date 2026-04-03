import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    gap: 10,
  },
  banner: {
    backgroundColor: 'purple',
    width: '100%',
    height: 110,
    justifyContent: 'center',
  },
  txtbanner: {
    color: 'white',
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 34,
    padding: 15,
    letterSpacing: 9,
  },
  img: {
    width: '100%',
    height: 160
  },
  grid: {
    flexDirection: 'row',
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#2d0a4e',
    color: 'white',
    padding: 5,
    marginVertical: 5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  viewItem: {
    flexDirection: 'row',
    gap: 5
  },
  corrido: {
    height: 225 
  },
  badge:{
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignSelf: 'flex-start',
    padding: 2,
    marginBlockStart: 12,
    borderRadius: 12,
    margin: 9,
  },
  botao: {
    backgroundColor: '#2d0a4e',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  }
});