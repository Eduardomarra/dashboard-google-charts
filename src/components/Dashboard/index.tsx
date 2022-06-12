import { GraphicLine } from '../GraphicLine';
import { GraphicBar} from '../GraphicBar';
import { GraphicCircle } from '../GraphicCircle';

import { Container } from './styles'
import { GraphicTable } from '../GraphicTable';
import { Count } from '../Count';

export function Dashboard() {
  return (
    <>
        <Container>
            <GraphicLine />
            <GraphicBar />
            <Count />
        </Container>
        <Container>
            <GraphicTable />
        </Container>
        <Container>
            <GraphicCircle />
        </Container>
    </>
  );
}
