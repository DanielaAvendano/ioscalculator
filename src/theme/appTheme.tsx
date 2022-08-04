import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  fila: {
    marginBottom: 18,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
