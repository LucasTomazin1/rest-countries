type theme = {
  backgroundColor: string
  color: string
}

type themes = {
  light: theme
  dark: theme
}

export const themes: themes = {
  light: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dark: {
    backgroundColor: '#2B3945',
    color: '#fff',
  },
}
