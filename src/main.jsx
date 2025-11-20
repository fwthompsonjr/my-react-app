import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;

const SuccessButton = styled(Button)`
  background-color: #28a745;
`;

function App() {
  return (
    <div>
      <PrimaryButton>Primary</PrimaryButton>
      <SuccessButton>Success</SuccessButton>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);