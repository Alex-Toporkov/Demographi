// src/components/CostPrice.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './css/CostPrice.css';

const totalCostsCat = 1250000 + 40000 + 100000 + 3000 + (100000 * 10); // Племенная пара + ветеринарные расходы + доставка + бокс + пожизненное содержание
const kittensCount = 20; // Максимум котят, которых может родить кошка
const costPerKitten = totalCostsCat / kittensCount; // Себестоимость одного котенка
const recommendedPriceCat = costPerKitten * 2; // Рекомендованная цена котенка

// Для щенков
const totalCostsDog = 700000 + 300000 + 40000 + 100000 + 3000 + (100000 * 10); // Племенная пара + ветеринарные расходы + доставка + бокс + пожизненное содержание
const puppiesCount = 35; // Максимум щенков, которых может родить сука
const costPerPuppy = totalCostsDog / puppiesCount; // Себестоимость одного щенка
const recommendedPriceDog = costPerPuppy * 2; // Рекомендованная цена щенка

const dataCat = [
    { name: 'Племенная пара (кошки)', value: 1250000 },
    { name: 'Ветеринарные расходы (кошки)', value: 40000 },
    { name: 'Корм и уход (кошки)', value: 6000 },
    { name: 'Прочие затраты (кошки)', value: 12000 },
    { name: 'Транспортные расходы (котенок)', value: 2060000 },
    { name: 'Пожизненные расходы (кошки)', value: 1000000 },
];

const dataDog = [
    { name: 'Племенная пара (собаки)', value: 1000000 },
    { name: 'Ветеринарные расходы (собаки)', value: 40000 },
    { name: 'Транспортные расходы (щенок)', value: 103000 },
    { name: 'Пожизненные расходы (собаки)', value: 1000000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699', '#FF9999'];

const CostPrice = () => {
    return (
        <div className="cost-price-container">
            <h1>Обоснование себестоимости товара (котёнок)</h1>
            <table className="cost-price-table">
                <thead>
                    <tr>
                        <th>Затраты (котёнок)</th>
                        <th>Сумма (руб.)</th>
                        <th>Процент от общей суммы</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCat.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.value}</td>
                            <td>{((entry.value / dataCat.reduce((total, item) => total + item.value, 0)) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                    <tr>
                        <td><strong>Себестоимость одного котёнка</strong></td>
                        <td>{costPerKitten.toFixed(2)} руб.</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td><strong>Рекомендованная цена продажи котёнка</strong></td>
                        <td>{recommendedPriceCat.toFixed(2)} руб.</td>
                        <td>—</td>
                    </tr>
                </tbody>
            </table>
            <br /> 
            <h1>Диаграмма распределения затрат (котёнок)</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart width={400} height={400} className="pie-chart">
                    <Pie
                        data={dataCat}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {dataCat.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
            <br /><br />
            <h1>Обоснование себестоимости товара (щенок)</h1>
            <table className="cost-price-table">
                <thead>
                    <tr>
                        <th>Затраты (щенок)</th>
                        <th>Сумма (руб.)</th>
                        <th>Процент от общей суммы</th>
                    </tr>
                </thead>
                <tbody>
                    {dataDog.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.value}</td>
                            <td>{((entry.value / dataDog.reduce((total, item) => total + item.value, 0)) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                    <tr>
                        <td><strong>Себестоимость одного щенка</strong></td>
                        <td>{costPerPuppy.toFixed(2)} руб.</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td><strong>Рекомендованная цена продажи щенка</strong></td>
                        <td>{recommendedPriceDog.toFixed(2)} руб.</td>
                        <td>—</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <h1>Диаграмма распределения затрат (щенок)</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart width={400} height={400} className="pie-chart">
                    <Pie
                        data={dataDog}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {dataDog.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default CostPrice;
