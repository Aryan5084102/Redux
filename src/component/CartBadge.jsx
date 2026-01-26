import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartBadge() {
    const cartCount = useSelector((state) => state.cart.totalQuantity)

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartCount || '0'} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}