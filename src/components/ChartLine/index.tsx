import React, { useEffect, useRef, CanvasHTMLAttributes } from 'react';
import Chart from 'chart.js';

type CanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;

const ChartLine: React.FC<CanvasProps> = ({ ...rest }) => {
  const canvasElm = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx: any = canvasElm?.current?.getContext('2d');

    const gradientBg = ctx.createLinearGradient(0, 0, 0, 500);
    gradientBg.addColorStop(0, '#7C67FF');
    gradientBg.addColorStop(1, 'transparent');

    const gradientStroke = ctx.createLinearGradient(500, 0, 0, 0);
    gradientStroke.addColorStop(0, '#7C67FF');
    gradientStroke.addColorStop(1, '#7C67FF');

    new Chart(ctx, {
      type: 'line',
      options: {
        responsive: true,
        animation: {
          easing: 'easeInOutBack',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        datasets: [
          {
            label: 'R$',
            data: [
              1500,
              200,
              7000,
              100,
              700,
              900,
              500,
              4000,
              500,
              4000,
              500,
              4000,
            ],
            backgroundColor: gradientBg,
            borderColor: gradientStroke,
            borderWidth: 1,
          },
        ],
      },
    });
  }, []);

  return <canvas ref={canvasElm} {...rest} />;
};

export default ChartLine;
