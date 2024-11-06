import styled from 'styled-components';

interface TableProps {
  caption: string,
  data: {key: string, value: string}[]
}

export function Table({caption, data}: TableProps) {

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <THead>{caption}</THead>
          </tr>
        </thead>
        <StyledTBody>
          <StyledHeadingTRow>
            {
              data?.map((entry, index) => {
                return (
                  <TData key={index}>
                    {entry.key}
                  </TData>
                )
              })
            }
          </StyledHeadingTRow>
          <StyledTRow>
            {
              data?.map((entry, index) => {
                return (
                  <TData key={index}>
                    {entry.value}
                  </TData>
                )
              })
            }
          </StyledTRow>

        </StyledTBody>
      </StyledTable>
    </>
  )
}

const StyledTBody = styled.tbody`
  display: flex;
`

const StyledTRow = styled.tr`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
`

const StyledHeadingTRow = styled(StyledTRow)`
  font-weight: bold;
`

const StyledTable = styled.table`
  border-spacing: 0;
`

const THead = styled.th`
  border: 1px solid black;
  padding: 10px;
  text-align: left;
  background: #000;
  color: #fff;
`

const TData = styled.td`
  border: 1px solid grey;
  padding: 10px;
  min-height: 45px;
`
