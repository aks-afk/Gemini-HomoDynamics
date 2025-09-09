import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { range } from 'd3-array';
import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';

interface VizNode {
    id: number;
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
}

const SelfOrganizingNetworkViz: React.FC = () => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const width = 300;
        const height = 200;
        const svg = select(ref.current).attr('viewBox', `0 0 ${width} ${height}`).html('');

        const nodes: VizNode[] = range(12).map(i => ({ id: i }));
        const links = range(11).map(i => ({ source: i, target: Math.floor(Math.random() * (i + 1)) }));

        const simulation = forceSimulation(nodes)
            .force('link', forceLink(links).id(d => (d as VizNode).id).distance(40))
            .force('charge', forceManyBody().strength(-50))
            .force('center', forceCenter(width / 2, height / 2));

        const link = svg.append('g').selectAll('line').data(links).join('line').attr('stroke', '#C1C1C1');
        const node = svg.append('g').selectAll('circle').data(nodes).join('circle').attr('r', 5).attr('fill', '#3A3A3A');

        simulation.on('tick', () => {
            link
                .attr('x1', d => (d.source as unknown as VizNode).x!)
                .attr('y1', d => (d.source as unknown as VizNode).y!)
                .attr('x2', d => (d.target as unknown as VizNode).x!)
                .attr('y2', d => (d.target as unknown as VizNode).y!);
            node.attr('cx', d => d.x!).attr('cy', d => d.y!);
        });

        return () => {
            simulation.stop();
        };
    }, []);

    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>Self-Organizing Network</h4>
            <svg ref={ref} style={{ width: '100%', height: 'auto' }}></svg>
            <p style={{ fontSize: '0.9rem', color: '#5A5A5A', lineHeight: 1.5, textAlign: 'center' }}>
                Life as an adaptive network that continuously restructures itself to maintain coherence.
            </p>
        </div>
    );
};

export default SelfOrganizingNetworkViz;