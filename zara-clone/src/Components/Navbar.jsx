import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import Dbody from './Dbody';
import {
    Box, Flex, Spacer, Text, HStack, Image, Center,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    Stack
} from '@chakra-ui/react';
import { AuthContext } from '../Context/Authcontext';
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { loginstatus, handaleloginstatus } = useContext(AuthContext);
    return (
        <>
            <HStack pl={4} pr={4} pt={2}>
                <Flex>
                    <GrMenu size={30} onClick={() => onOpen()} cursor="pointer" />
                    <Link to={"/"}>
                        <Image
                            w={"200px"}
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1024px-Zara_Logo.svg.png'
                            alt='Dan Abramov'
                        />
                    </Link>
                </Flex>
                <Spacer />
                <Box>
                    <Flex p="4" gap={4}>
                        <Link to='search'>
                            <Box borderBottom="1px" borderColor="black" mb="42px" pr={5}>
                                <Text style={{ cursor: "pointer" }} fontSize="lg" fontWeight={500}>
                                    Search
                                </Text>
                            </Box>
                        </Link>
                        <Box>
                            {!loginstatus ?
                                <Text style={{ cursor: "pointer" }} fontSize="md" fontWeight={250}>
                                    <Link to="/login"> Log In </Link>
                                </Text> :
                                <Text style={{ cursor: "pointer" }} fontSize="md" fontWeight={250} onClick={handaleloginstatus}>
                                    Logout
                                </Text>
                            }
                        </Box>
                        <Box>
                            <Text style={{ cursor: "pointer" }} fontSize="md" fontWeight={250}>
                                Help
                            </Text>
                        </Box>
                        <Link to="/cart">
                            <Box style={{ cursor: "pointer" }}>
                                <svg
                                    width="1.7rem"
                                    className="layout-header-links__cart-icon"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9 5.001V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.001h5v7h-1v-6H5v13.9h10v1H4V5h5zM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.001h-4V4z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M22.8 23.4v-9h-5.4v9l2.695-2.827L22.8 23.4zm-4.6-1.998l1.894-1.987L22 21.407V15.2h-3.8v6.202z"
                                    ></path>
                                    <text x="8" y="19" fontSize="xs" fontWeight={100} fill="black">
                                        {/* {state.cart.length} */}0
                                    </text>
                                </svg>
                            </Box>
                        </Link>
                    </Flex>
                </Box>
            </HStack>

            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader ml={[0, 0, 12]} borderBottomWidth='1px'>
                        <Image
                            w={"200px"}
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1024px-Zara_Logo.svg.png'
                            alt='Dan Abramov'
                        />
                    </DrawerHeader>
                    <DrawerBody>
                        <Dbody />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    )
}

export default Navbar
