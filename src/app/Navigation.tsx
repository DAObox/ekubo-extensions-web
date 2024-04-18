"use client";

import { Button } from "@/components/Button";
import { Flex, HStack } from "@chakra-ui/react";
import { create } from "zustand";

export const useMenuStore = create<{ decreasedPadding: boolean }>()(() => ({
  decreasedPadding: false,
}));

export default function Navigation() {
  const { decreasedPadding } = useMenuStore();

  return (
    <Flex
      as="nav"
      justifyContent="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      p={decreasedPadding ? 4 : 12}
      transition="padding 0.3s"
    >
      <Flex
        maxW="1400px"
        w="full"
        py={4}
        px={8}
        alignItems="center"
        justifyContent="space-between"
        bg="rgba(2, 21, 49, 0.3)"
        borderRadius="full"
        backdropFilter="blur(10px)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={81}
          height={14}
          fill="none"
        >
          <g fill="#fff" clipPath="url(#a)">
            <path d="M9.01 8.443a1.674 1.674 0 1 0 0-3.348 1.674 1.674 0 0 0 0 3.348Z" />
            <path d="M.132.997h17.76v.752a.475.475 0 0 1-.154.35l-1.59 1.43a1.064 1.064 0 0 1-.79.364h-1.261s-.003 1.045-.003 1.656c0 .61-.25 1.27-.25 1.27l.17.17c.183-.25.99-1.244 1.525-1.244l2.024-.011v2.583l-3.469.04v5.058c-.893-.889-1.788-1.775-2.679-2.666v-4.84c0-.72.16-1.307.307-1.95v-.002l.001-.004.001-.004a.045.045 0 0 0 .002-.014.027.027 0 0 0-.004-.013c-.018-.027-.093-.055-.165-.068-.055-.011-.108-.013-.131-.002-.385.188-.794.258-1.217.265-.798.013-1.597.013-2.395 0-.423-.007-.831-.077-1.216-.265-.054-.027-.264.022-.296.07-.008.014-.003.022 0 .035v.002c.147.643.307 1.236.307 1.95v4.84c-.891.89-1.786 1.777-2.68 2.666V8.357l-3.468-.04V5.734l2.024.01c.535 0 1.342.994 1.524 1.245l.17-.17s-.25-.66-.25-1.27l-.002-1.656H2.666c-.297 0-.583-.132-.79-.364l-1.59-1.43a.475.475 0 0 1-.154-.35V.997Z" />
            <path
              fillRule="evenodd"
              d="M44.962.639c-4 0-7.264 2.529-7.264 6.238 0 3.71 3.218 6.223 7.264 6.223s7.264-2.543 7.264-6.223c0-3.68-3.264-6.238-7.264-6.238Zm.016 2.56c2.483 0 4.275 1.64 4.275 3.678 0 2.1-1.884 3.664-4.275 3.664-2.39 0-4.32-1.534-4.32-3.664S42.495 3.2 44.977 3.2ZM23.814.884v11.957h5.73c4.17 0 6.636-2.5 6.636-6.055 0-3.236-2.021-5.902-6.803-5.902h-5.563Zm5.393 9.442c-.795 0-1.671 0-2.62.428v.003l-.32-.307c.611-2.362.595-4.8-.017-7.312l.337-.154c.795.413 1.426.413 2.084.413 1.808 0 4.552 0 4.552 3.51 0 2.928-2.024 3.419-4.016 3.419ZM65.987 6.877c0-3.71 3.264-6.238 7.264-6.238s7.264 2.558 7.264 6.238c0 3.68-3.218 6.223-7.264 6.223s-7.264-2.513-7.264-6.223Zm11.555 0c0-2.038-1.792-3.677-4.275-3.677-2.482 0-4.32 1.547-4.32 3.677s1.93 3.664 4.32 3.664c2.391 0 4.275-1.563 4.275-3.664Z"
              clipRule="evenodd"
            />
            <path d="m53.978.884 9.944.014V8.1c0 1.335 0 5.012-4.703 5.012-2.941 0-5.24-1.531-5.24-4.214V6.907l2.79-.04V8.5c0 1.135.873 2.055 2.312 2.055 1.884 0 2.038-1.243 2.038-2.07V5.383c0-.798.142-1.432.393-2.187.003-.008 0-.013-.008-.016-.062-.027-.304-.186-.364-.156-.678.35-1.407.436-2.159.436h-5.003V.884Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 .594h80.55v12.9H0z" />
            </clipPath>
          </defs>
        </svg>
        <HStack>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={41}
            height={41}
            fill="none"
          >
            <path
              fill="#fff"
              d="M26.435 14.785a.044.044 0 0 0-.022-.02 14.076 14.076 0 0 0-3.473-1.077.053.053 0 0 0-.056.027 9.79 9.79 0 0 0-.432.888 13 13 0 0 0-3.901 0 8.98 8.98 0 0 0-.44-.888.055.055 0 0 0-.055-.027c-1.2.207-2.367.57-3.473 1.077a.05.05 0 0 0-.023.02c-2.212 3.303-2.818 6.525-2.52 9.707a.058.058 0 0 0 .022.04 14.152 14.152 0 0 0 4.26 2.153.055.055 0 0 0 .06-.02c.329-.447.62-.921.871-1.417a.055.055 0 0 0-.01-.063.054.054 0 0 0-.02-.012 9.324 9.324 0 0 1-1.33-.634.054.054 0 0 1-.022-.07.055.055 0 0 1 .017-.02c.089-.068.179-.137.264-.208a.053.053 0 0 1 .055-.007c2.792 1.274 5.816 1.274 8.575 0a.052.052 0 0 1 .056.007c.085.07.174.14.265.207a.055.055 0 0 1 .021.047.054.054 0 0 1-.026.044c-.425.248-.87.46-1.332.633a.055.055 0 0 0-.029.076c.256.493.547.966.871 1.417a.055.055 0 0 0 .06.02 14.105 14.105 0 0 0 4.268-2.153.056.056 0 0 0 .022-.039c.356-3.679-.596-6.875-2.523-9.708Zm-8.764 7.77c-.841 0-1.534-.772-1.534-1.72 0-.947.68-1.718 1.534-1.718.86 0 1.546.778 1.533 1.719 0 .947-.68 1.719-1.534 1.719Zm5.669 0c-.84 0-1.533-.772-1.533-1.72 0-.947.679-1.718 1.533-1.718.86 0 1.547.778 1.534 1.719 0 .947-.673 1.719-1.534 1.719Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={41}
            height={41}
            fill="none"
          >
            <path
              fill="#fff"
              d="M27.198 13.11c-.273-.232-.702-.265-1.145-.087-.467.187-13.196 5.647-13.714 5.87-.095.033-.918.34-.833 1.024.076.617.737.872.818.902l3.236 1.108c.215.715 1.007 3.351 1.182 3.915.109.35.287.812.598.907.274.106.546.01.723-.129l1.978-1.835 3.194 2.49.076.046c.217.096.425.144.623.144.153 0 .3-.028.44-.086.48-.196.67-.652.69-.704l2.386-12.4c.146-.663-.056-1-.252-1.165Zm-8.784 9.26-1.091 2.911-1.092-3.639 8.37-6.186-6.187 6.914Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={41}
            height={41}
            fill="none"
          >
            <path
              fill="#fff"
              d="M18.591 22.762c0 .74-.386 1.951-1.3 1.951-.913 0-1.3-1.21-1.3-1.951 0-.74.387-1.951 1.3-1.951.914 0 1.3 1.21 1.3 1.951ZM29 20.974c0 1.13-.113 2.326-.62 3.364-1.342 2.713-5.032 2.65-7.675 2.65-2.684 0-6.594.095-7.99-2.65-.517-1.027-.715-2.235-.715-3.364 0-1.485.492-2.887 1.47-4.024a5.543 5.543 0 0 1-.273-1.728c0-.762.174-1.144.517-1.835 1.604 0 2.632.319 3.853 1.275a13.565 13.565 0 0 1 3.142-.354c.956 0 1.92.103 2.848.326 1.204-.946 2.23-1.247 3.817-1.247.348.69.518 1.073.518 1.835 0 .58-.093 1.158-.273 1.707.974 1.147 1.381 2.56 1.381 4.045Zm-2.277 1.788c0-1.555-.946-2.925-2.603-2.925-.67 0-1.31.12-1.984.212-.527.082-1.055.113-1.597.113-.538 0-1.066-.031-1.597-.113-.663-.092-1.31-.212-1.984-.212-1.657 0-2.603 1.37-2.603 2.925 0 3.11 2.848 3.588 5.327 3.588h1.707c2.49 0 5.334-.475 5.334-3.588Zm-2.926-1.951c-.913 0-1.3 1.21-1.3 1.951 0 .74.387 1.951 1.3 1.951.914 0 1.3-1.21 1.3-1.951 0-.74-.386-1.951-1.3-1.951Z"
            />
          </svg>
        </HStack>
        <Button size="sm">DOCS</Button>
      </Flex>
    </Flex>
  );
}
