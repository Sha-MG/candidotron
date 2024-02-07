import { useState } from 'react';

import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { DndContext } from '@dnd-kit/core';

import CustomButton from '../common/custom_button';
import PassionDroppable from '../common/stepSix/passion_droppable';
import PassionImg from '../common/stepSix/passion_img';

interface Step6Props {
  next: () => void;
}

export default function Step5({ next }: Step6Props) {
  const [validate, setValidate] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack textAlign='justify'>
      <Box>
        Alfred vous dépose avec solennité devant un immense manoir : Le Domaine
        des Inspirations.
      </Box>
      <Image src='domaine.jpg' alt='manoir' />
      <Box>
        Dès les premiers pas à l&apos;intérieur, une atmosphère chargée de
        sérénité et d&apos;envie enrobe vos sens. Chaque pièce semble être un
        monde à part entière, imprégné d&apos;une énergie créative unique.
      </Box>
      <Box>
        {' '}
        Au fond du hall principal, une porte imposante attire votre regard,
        ornée de l&apos;inscription : &quot;Montagne du Destin&quot;. C&apos;est
        là votre destination ultime, le lieu où vous pourrez rencontrer votre
        candidate, enfin ! Mais malgré ses efforts pour l&apos;ouvrir, la porte
        reste impassible, défiant ses attentes. Un pavé numérique capte votre
        attention, ses touches colorées semblant dissimuler un secret
        insaisissable...
      </Box>
      <Box>
        {' '}
        Chaque pièce pourrait receler des indices cruciaux pour percer le
        mystère de cette porte verrouillée. Animé par la curiosité et la
        détermination,vous vous lancez dans l&apos;exploration de ce domaine
        hors du commun.
      </Box>
      <Center my={10}>
        <CustomButton action={onOpen} text='Explorer les pièces' />
      </Center>
      <Drawer onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent bgColor='#E8E6DD'>
          <DrawerCloseButton />
          <DrawerHeader>Le Domaine des Inspirations</DrawerHeader>
          <DrawerBody>
            <DndContext>
              <Stack>
                <Box>
                  Votre exploration vous permet de dégager 6 pièces principales
                  qui semblent plus importantes que les autres. Vous devriez
                  réorganiser vos pensées afin de trouver la solution pour
                  ouvrir la porte.
                </Box>
                <HStack w='full' justifyContent='space-between' wrap='wrap'>
                  <HStack w='65%' flexWrap='wrap'>
                    <PassionDroppable alt='piece3' />
                    <PassionDroppable alt='piece1' />
                    <PassionDroppable alt='piece4' />
                    <PassionDroppable alt='piece6' />
                    <PassionDroppable alt='piece2' />
                    <PassionDroppable alt='piece5' />
                  </HStack>
                  <HStack w='30%' flexWrap='wrap'>
                    <PassionImg url='/passions/piece1.jpg' alt='piece1' />
                    <PassionImg url='/passions/piece2.jpg' alt='piece2' />
                    <PassionImg url='/passions/piece3.jpg' alt='piece3' />
                    <PassionImg url='/passions/piece4.jpg' alt='piece4' />
                    <PassionImg url='/passions/piece5.jpg' alt='piece5' />
                    <PassionImg url='/passions/piece6.jpg' alt='piece6' />
                  </HStack>
                </HStack>
              </Stack>
            </DndContext>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}
