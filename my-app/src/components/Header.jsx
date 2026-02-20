import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar,        // шапка как в мобильных приложениях
  Toolbar,       // контейнер в шапке
  Typography,    // текст с правильными шрифтами
  Button,        // готовая кнопка с анимацией
  Box,           // универсальный div
  IconButton,    // кнопка с иконкой
  Drawer,        // выдвижное меню (мобильные)
  List,          // список
  ListItem,      // пункт списка
  ListItemText,  // текст в пункте
  useMediaQuery, // проверка размера экрана
  useTheme       // доступ к теме (цвета, брейкпоинты)
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // иконка "гамбургер"

function Header({ companyName }) {
  // Состояние для мобильного меню (открыто/закрыто)
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Проверяем: экран меньше 900px? (мобильный)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Переключение мобильного меню
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Содержимое выдвижного меню
  const drawerContent = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        <ListItem button component={NavLink} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Главная" />
        </ListItem>
        <ListItem button component={NavLink} to="/catalog" onClick={handleDrawerToggle}>
          <ListItemText primary="Каталог" />
        </ListItem>
        <ListItem button component={NavLink} to="/about" onClick={handleDrawerToggle}>
          <ListItemText primary="О нас" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* ШАПКА */}
      <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#fff' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
          {/* ЛОГОТИП */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: '#1b1a1a', fontWeight: 500 }}
          >
            {companyName}
          </Typography>

          {/* ДЕСКТОПНОЕ МЕНЮ (скрыто на мобильных) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Button component={NavLink} to="/" color="inherit" sx={{ textTransform: 'none' }}>
                Главная
              </Button>
              <Button component={NavLink} to="/catalog" color="inherit" sx={{ textTransform: 'none' }}>
                Каталог
              </Button>
              <Button component={NavLink} to="/about" color="inherit" sx={{ textTransform: 'none' }}>
                О нас
              </Button>
              <Button 
                variant="contained" 
                sx={{ backgroundColor: '#1b1a1a', borderRadius: '15px', textTransform: 'none' }}
              >
                Get template
              </Button>
            </Box>
          )}

          {/* МОБИЛЬНОЕ МЕНЮ (кнопка "гамбургер") */}
          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* ВЫДВИЖНОЕ МЕНЮ (справа) */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Header;