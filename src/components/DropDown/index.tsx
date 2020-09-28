import React, { useState, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import {
  Container,
  Title,
  DropDownContainer,
  DropDownHeader,
  HeaderTitle,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Error,
} from './styles';

interface DropDownProps {
  data: object[];
  name: string;
  perspective?: 'horizontal' | 'vertical';
  description?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

const DropDown: React.FC<DropDownProps> = ({
  data,
  perspective = 'vertical',
  name,
  description,
  icon: Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ key: '', value: '' });
  const formRef = useRef<HTMLDivElement>(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const {
    fieldName,
    defaultValue = { key: '', value: '' },
    error,
    registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: formRef.current,
      getValue: () => {
        return selectedOption;
      },
    });
  }, [
    selectedOption,
    fieldName,
    registerField,
    setSelectedOption,
    defaultValue,
  ]);

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

  useOnClickOutside(formRef, () => setIsOpen(false));

  return (
    <Container perspective={perspective}>
      {description && <Title>{description}</Title>}
      <DropDownContainer
        ref={formRef}
        isFilled={!!selectedOption.key}
        isFocused={isOpen}
        isErrored={!!error}
        defaultValue={defaultValue}
      >
        <DropDownHeader onClick={toggling}>
          <HeaderTitle>
            {Icon && <Icon size={20} />}
            <span>{selectedOption.value || 'Selecionar'}</span>
          </HeaderTitle>
          {!!error && (
            <Error title={error}>
              <FiAlertCircle color="#c53030" size={20} />
            </Error>
          )}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {data.map(({ key, value }: any) => (
                <ListItem onClick={onOptionClicked({ key, value })} key={key}>
                  {value}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Container>
  );
};

export default DropDown;
