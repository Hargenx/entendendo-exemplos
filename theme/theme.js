const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#ff6347',
    text: '#333',
    background: '#f0f0f0',
    // Adicione outras cores conforme necessário
  },
  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    // Adicione outros estilos de fonte conforme necessário
  },
  button: {
    backgroundColor: '#457599',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
    // Adicione estilo para a View "container"
    container: {
      flex: 1,
      backgroundColor: 'red', // Cor de fundo da View
      padding: 20, // Espaçamento interno da View
      alignItems: 'center', // Alinhamento de itens
      justifyContent: 'center', // Justificação de conteúdo
    },
};

export default theme;
